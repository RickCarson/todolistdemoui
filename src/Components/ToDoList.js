import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import ToDoListItem from "./ToDoListItem"

export default function ToDoList ({toDoList, toDoGroups, handleToDoChange}) {
    return (
        <span className="ToDoList">
            <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                {
                    toDoList.map(toDo => (
                        <>
                        <ListItem style={{display: 'inline-block'}} alignItems="flex-start">

                            <ToDoListItem toDo={toDo} toDoGroups={toDoGroups} handleToDoChange={handleToDoChange} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </>
                    ))
                }
            </List>
        </span>
    )
}
