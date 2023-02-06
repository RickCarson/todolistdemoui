import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function ToDoHeader(){
    return (
        <div className="HeaderTitle">
            <FactCheckIcon sx={{ fontSize: 40, marginRight: 5 }} />
            ToDo List Demo Application
        </div>
    );
}