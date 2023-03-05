import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import ToDoListItem from "./ToDoListItem"
import ToDoListProps from '../Interfaces/IToDoListProps';

export default function ToDoList ({ToDoList, ToDoGroups, HandleToDoChange}: ToDoListProps): JSX.Element {
    return (
        <span className="ToDoList">
            <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                {
                    ToDoList.map(toDo => (
                        <>
                        <ListItem key={toDo.id} style={{display: 'inline-block'}} alignItems="flex-start">

                            <ToDoListItem ToDo={toDo} ToDoGroups={ToDoGroups} HandleToDoChange={HandleToDoChange} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </>
                    ))
                }
            </List>
        </span>
    )
}
