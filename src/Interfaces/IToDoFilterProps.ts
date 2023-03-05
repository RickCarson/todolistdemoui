import { SelectChangeEvent } from "@mui/material";
import ToDo from "./IToDo";
import ToDoGroup from "./IToDoGroup";

export default interface ToDoFilterProps{
    Title: string,
    MinWidth: number,
    IncludeAll: boolean,
    ToDoGroups: ToDoGroup[],
    SelectedGroup: number,
    HandleChangeCommand: (event: SelectChangeEvent) => void
}