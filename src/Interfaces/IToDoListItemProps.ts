import { SelectChangeEvent } from "@mui/material";
import ToDo from "./IToDo";
import ToDoGroup from "./IToDoGroup";

export default interface ToDoListItemProps{
    ToDo: ToDo, 
    ToDoGroups: ToDoGroup[], 
    HandleToDoChange: (event: SelectChangeEvent<any>, toDo: ToDo) =>  void
}