import ToDoFilter from "./ToDoFilter"

export default function ToDoListItem({toDo, toDoGroups, handleToDoChange}) {
    return (
        <div key={toDo.id}>
            {toDo.details}
             - 
            <ToDoFilter
                includeAll={false} 
                toDoGroups={toDoGroups} 
                selectedGroup={toDo.toDoGroupId} 
                handleChangeCommand={(events) => handleToDoChange(events, toDo)} />
        </div>
    )
}