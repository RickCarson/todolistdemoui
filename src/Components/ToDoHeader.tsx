import FactCheckIcon from '@mui/icons-material/FactCheck';
import React from 'react';

export default function ToDoHeader(): JSX.Element{
    return (
        <div className="HeaderTitle">
            <FactCheckIcon sx={{ fontSize: 40, marginRight: 5 }} />
            ToDo List Demo Application
        </div>
    );
}