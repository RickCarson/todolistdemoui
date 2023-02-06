import ToDoListItem from "./ToDoListItem"

export default function ToDoList ({toDoList, toDoGroups, handleToDoChange}) {
    return (
        <div>
            {
                toDoList.map(toDo => (
                    <ToDoListItem toDo={toDo} toDoGroups={toDoGroups} handleToDoChange={handleToDoChange} />
                ))
            }
        </div>
    )
}
