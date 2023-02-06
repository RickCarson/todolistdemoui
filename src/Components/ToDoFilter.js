
export default function ToDoFilter({ includeAll, toDoGroups, selectedGroup, handleChangeCommand}) {
    return (
        <select value={selectedGroup} onChange={handleChangeCommand}>
            {
               includeAll && <option key={0} value={0}>All</option>
            }
            {
                toDoGroups.map(toDoGroup => (
                    <option key={toDoGroup.id} value={toDoGroup.id}>{toDoGroup.name}</option>
                ))
            }
        </select>
    );
}