import ToDoGroup from "./IToDoGroup";

export default interface ToDo {
  id: number,    
  details: string;
  toDoGroupId: number;
  toDoGroup: ToDoGroup;
}; 