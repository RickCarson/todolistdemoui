import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import ToDoFilter from "./ToDoFilter"
import React from 'react';
import ToDoListItemProps from '../Interfaces/IToDoListItemProps';

export default function ToDoListItem({ToDo, ToDoGroups, HandleToDoChange}: ToDoListItemProps): JSX.Element {
    return (
        <span className="ToDoListItem" 
            key={ToDo.id}>

            <ListItemAvatar style={{display: 'inline-block'}}>
                <Avatar alt={ToDo.toDoGroup.name} src="/implimentinamgeoneday.jpg" />
            </ListItemAvatar>
            {ToDo.details}
            <ToDoFilter
                Title=''
                IncludeAll={false} 
                MinWidth={150}
                ToDoGroups={ToDoGroups} 
                SelectedGroup={ToDo.toDoGroupId} 
                HandleChangeCommand={(events) => HandleToDoChange(events, ToDo)} />
        </span>
    )
}