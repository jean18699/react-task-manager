import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle: reminder})=>{

    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=> reminder(task.id)}>
            <h3>{task.title}
            <FaTimes style={
                {
                color: 'red', cursor:'pointer',
                marginLeft: '18rem'
                }}
            onClick={()=> onDelete(task.id)}    
            />
            </h3>
            
            <p>{task.day}</p>
            <p>Reminder: {task.reminder ? 'Yes': 'No'}</p>
        </div>
    )

}

export default Task;