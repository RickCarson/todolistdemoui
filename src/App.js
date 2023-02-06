import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useEffect, useState } from "react"

import Button from '@mui/material/Button';

import { ApiGet, ApiPost, ApiPut, ToDoApiUrl, ToDoGruopsApiUrl } from './Services/FetchService';

import ToDoHeader from "./Components/ToDoHeader";
import ToDoFilter from "./Components/ToDoFilter";
import ToDoList from "./Components/ToDoList";
import AddNewToDo from "./Components/AddNewToDo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDoGroups, setToDoGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(0);

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

    const pendingGroup = toDoGroups.find(group => group.name === "Pending");
    console.log(pendingGroup);

    const toDoToAdd = {
      "details": toDoDetails,
      "toDoGroupId": pendingGroup.id,
      "toDoGroup": pendingGroup
    }

    ApiPost(ToDoApiUrl, toDoToAdd);

    // Also add manually as calling API to refresh data may return before
    // POST has completed the update

    if (Number(selectedGroup) === pendingGroup.id || Number(selectedGroup) === 0)    
      setToDos([...toDos, toDoToAdd]);
  }

  const HandleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  }

  const HandleToDoChange = (event, toDo) => {
    console.log('ToDo item changed' + event.target.value + ' - ' + toDo);

    const newToDoList = [...toDos];
    const index = newToDoList.indexOf(toDo);

    const toDoGroup = toDoGroups.find(group => group.id === Number(event.target.value));
    toDo.toDoGroupId = toDoGroup.id;
    toDo.toDoGroup = toDoGroup;

    ApiPut(ToDoApiUrl, toDo);

    // Also update manually as calling API to refresh data may return before
    // PUT has completed the update

    if (index > -1) {
      newToDoList.splice(index, 1);
      setToDos(newToDoList);
    }
  }

  return (
    <div className="App">
      <ToDoHeader />
      <AddNewToDo addNewToDoCommand={AddToDo} />
      <ToDoFilter title={"Filter ToDos"} minWidth={300} includeAll={true} toDoGroups={toDoGroups} selectedGroup={selectedGroup} handleChangeCommand={HandleGroupChange} />
      <ToDoList toDoList={toDos} toDoGroups={toDoGroups}  handleToDoChange={HandleToDoChange} />
      <Button variant="contained" onClick={GetToDoData}>Refresh</Button>
    </div>
  );
}

export default App;
