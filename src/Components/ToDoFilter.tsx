import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToDoFilterProps from '../Interfaces/IToDoFilterProps';

export default function ToDoFilter({Title, MinWidth, IncludeAll, ToDoGroups, SelectedGroup, HandleChangeCommand}: ToDoFilterProps) {
    return (
        <span className='ToDoFilter'>
        <Box style={{display: 'inline-block'}} sx={{ minWidth: {MinWidth} }}>
            <FormControl fullWidth>
            <InputLabel id="group-filter">{Title}</InputLabel>
            <Select
                labelId="group-filter-label"
                id="group-filter-select"
                value={SelectedGroup && SelectedGroup.toString()}
                label={Title}
                size="small"
                onChange={HandleChangeCommand}
            >
                {
                    IncludeAll && <MenuItem key={0} value={0}>All</MenuItem>
                }
                {
                    ToDoGroups && ToDoGroups.map(toDoGroup => (
                        <MenuItem key={toDoGroup.id} value={toDoGroup.id}>{toDoGroup.name}</MenuItem>
                    ))
                }
            </Select>
            </FormControl>
        </Box>
        </span>
    );
}