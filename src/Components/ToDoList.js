
export default function ToDoList ({toDoList}) {
    return (
        <div>
            {
                toDoList.map(toDo => (
                    <div key={toDo.id}>{toDo.details}</div>
                ))
            }
        </div>
    )
}
