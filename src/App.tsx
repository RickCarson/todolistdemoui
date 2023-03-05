import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useEffect, useState } from "react"

import { Button, SelectChangeEvent } from '@mui/material';

import { ApiGet, ApiPost, ApiPut, ToDoApiUrl, ToDoGruopsApiUrl } from './Services/FetchService';

import ToDoHeader from "./Components/ToDoHeader";
import ToDoFilter from "./Components/ToDoFilter";
import ToDoList from "./Components/ToDoList";
import AddNewToDo from "./Components/AddNewToDo";
import ToDo from './Interfaces/IToDo';
import ToDoGroup from './Interfaces/IToDoGroup';

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [toDoGroups, setToDoGroups] = useState<ToDoGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<number>(0);

  useEffect(() => {
     GetToDoGroupsData();
  },[]);

  useEffect(() => {
    GetToDoData();
  },[selectedGroup]);

  const GetToDoGroupsData = () => {
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

  const AddToDo = (toDoDetails: string) => {
    console.log(toDoDetails);

    const tryGetGroup = toDoGroups.find(group => group.name === "Pending");
    if (tryGetGroup === undefined)
      throw new Error('Value not found');

    const pendingGroup: ToDoGroup = tryGetGroup;

    const toDoToAdd: ToDo = {
      "id": toDos.length,
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

  const HandleGroupChange = (event: SelectChangeEvent) => {
    setSelectedGroup(Number(event.target.value));
  }

  const HandleToDoChange = (event: SelectChangeEvent<any>, toDo: ToDo) => {
    console.log('ToDo item changed' + event.target.value + ' - ' + toDo);

    const newToDoList: ToDo[] = [...toDos];
    const index: number = newToDoList.indexOf(toDo);

    const tryGetGroup: ToDoGroup | undefined = toDoGroups.find(group => group.id === Number(event.target.value));
    if (tryGetGroup === undefined)
      throw new Error('Value not found');

    const toDoGroup: ToDoGroup = tryGetGroup;
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
      <AddNewToDo AddNewHandler={AddToDo} />
      <ToDoFilter Title={"Filter ToDos"} MinWidth={300} IncludeAll={true} ToDoGroups={toDoGroups} SelectedGroup={selectedGroup} HandleChangeCommand={HandleGroupChange} />
      <ToDoList ToDoList={toDos} ToDoGroups={toDoGroups}  HandleToDoChange={HandleToDoChange} />
      <Button variant="contained" onClick={GetToDoData}>Refresh</Button>
    </div>
  );
}

export default App;
