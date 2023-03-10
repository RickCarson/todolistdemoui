import React, { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddNewToDoProps from "../Interfaces/IAddNewToDoProps";

export default function AddNewToDo({AddNewHandler}: AddNewToDoProps): JSX.Element {
    const [toDoDetails, setToDoDetails] = useState<string>('');

    const toDoDetailsChanges = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setToDoDetails(event.target.value);
    }

    const addNew = (): void => {
        AddNewHandler(toDoDetails);
        setToDoDetails('');
    }

    return (
        <div className="AddToDo">
            <TextField id="newToDo" 
                label="Add ToDo Here" 
                variant="outlined"
                size="small"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    toDoDetailsChanges(event);
                  }}
                value={toDoDetails}/>

            <Button variant="contained" onClick={addNew}>+ Add ToDo</Button>
        </div>
    );
}