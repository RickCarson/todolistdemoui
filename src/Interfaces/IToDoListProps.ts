import { SelectChangeEvent } from "@mui/material";
import ToDo from "./IToDo";
import ToDoGroup from "./IToDoGroup";

export default interface ToDoListProps {
    ToDoList: ToDo[], 
    ToDoGroups: ToDoGroup[], 
    HandleToDoChange: (event: SelectChangeEvent, toDo: ToDo) => void
}