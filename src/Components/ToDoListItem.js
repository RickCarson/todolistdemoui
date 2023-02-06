import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import ToDoFilter from "./ToDoFilter"

export default function ToDoListItem({toDo, toDoGroups, handleToDoChange}) {
    return (
        <span className="ToDoListItem" 
            key={toDo.id}>

            <ListItemAvatar style={{display: 'inline-block'}}>
                <Avatar alt={toDo.toDoGroup.name} src="/implimentinamgeoneday.jpg" />
            </ListItemAvatar>
            {toDo.details}
            <ToDoFilter
                includeAll={false} 
                minWidth={150}
                toDoGroups={toDoGroups} 
                selectedGroup={toDo.toDoGroupId} 
                handleChangeCommand={(events) => handleToDoChange(events, toDo)} />
        </span>
    )
}