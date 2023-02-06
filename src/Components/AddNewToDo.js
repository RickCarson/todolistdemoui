import { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
        <div className="AddToDo">
            <TextField id="newToDo" 
                label="Add ToDo Here" 
                variant="outlined"
                size="small"
                onChange={toDoDetailsChanges} 
                value={toDoDetails}/>

            <Button variant="contained" onClick={addNew}>+ Add ToDo</Button>
        </div>
    );
}