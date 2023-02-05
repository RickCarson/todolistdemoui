import React, { useEffect, useState } from "react"
import './App.css';

import { ApiGet, ApiPost, ToDoApiUrl, ToDoGruopsApiUrl } from './Services/FetchService';

import ToDoHeader from "./Components/ToDoHeader";
import ToDoFilter from "./Components/ToDoFilter";
import ToDoList from "./Components/ToDoList";
import AddNewToDo from "./Components/AddNewToDo";

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

  const AddToDo = (toDoDetails) => {
    console.log(toDoDetails);

    const toDoToAdd = {
      "details": toDoDetails
    }

    ApiPost(ToDoApiUrl, toDoToAdd);

    // Also add manually as calling API to refresh data may return before
    // POST has completed the update

    setToDos([...toDos, toDoToAdd]);
  }

  const HandleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  }

  return (
    <div className="App">
      <ToDoHeader />
      <AddNewToDo addNewToDoCommand={AddToDo} />
      <ToDoFilter toDoGroups={toDoGroups} selectedGroup={selectedGroup} handleChangeCommand={HandleGroupChange}  />
      <ToDoList toDoList={toDos} />
    </div>
  );
}

export default App;
