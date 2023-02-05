import { useState } from "react"

export default function AddNewToDo({addNewToDoCommand}) {
    const [toDoDetails, setToDoDetails] = useState('');

    const toDoDetailsChanges = (event) => {
        setToDoDetails(event.target.value);
    }

    const addNew = () => {
        addNewToDoCommand(toDoDetails);
        setToDoDetails('');
    }

    return (
        <div>
            <input type="text" 
                onChange={toDoDetailsChanges} 
                value={toDoDetails}/>

            <button onClick={addNew}>+ Add ToDo</button>
        </div>
    );
}