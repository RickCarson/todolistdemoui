import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ToDoFilter({title, minWidth, includeAll, toDoGroups, selectedGroup, handleChangeCommand}) {
    return (
        <span className='ToDoFilter'>
        <Box style={{display: 'inline-block'}} sx={{ minWidth: {minWidth} }}>
            <FormControl fullWidth>
            <InputLabel id="group-filter">{title}</InputLabel>
            <Select
                labelId="group-filter-label"
                id="group-filter-select"
                value={selectedGroup}
                label={title}
                size="small"
                onChange={handleChangeCommand}
            >
                {
                includeAll && <MenuItem key={0} value={0}>All</MenuItem>
                }
                {
                    toDoGroups.map(toDoGroup => (
                        <MenuItem key={toDoGroup.id} value={toDoGroup.id}>{toDoGroup.name}</MenuItem>
                    ))
                }
            </Select>
            </FormControl>
        </Box>
        </span>
    );
}