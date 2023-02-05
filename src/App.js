import React, { useEffect, useState } from "react"
import './App.css';

import { ApiGet, ToDoApiUrl, ToDoGruopsApiUrl } from './Services/FetchService';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDoGroups, setToDoGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState([0]);

  useEffect(() => {
     GetToDoGroupsData();
  },[]);

  useEffect(() => {
    GetToDoData();
  },[selectedGroup]);

  const GetToDoGroupsData = (groupName) => {
    ApiGet(ToDoGruopsApiUrl).then(
      result => setToDoGroups(result));
  }

  const GetToDoData = () => {
    if (selectedGroup > 0){
      ApiGet(ToDoApiUrl+'?toDoGroupId='+selectedGroup).then(
        result => setToDos(result));
      return;
    }

    ApiGet(ToDoApiUrl).then(
      result => setToDos(result));
  }

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  return (
    <div className="App">
      <select value={selectedGroup} onChange={handleGroupChange}>
        <option key={0} value={0}>All</option>
        {
          toDoGroups.map(toDoGroup => (
              <option key={toDoGroup.id} value={toDoGroup.id}>{toDoGroup.name}</option>
          ))
        }
      </select>
      {
        toDos.map(toDo => (
          <div key={toDo.id}>{toDo.details}</div>
        ))
      }
    </div>
  );
}

export default App;
