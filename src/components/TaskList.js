import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import Task from './Task';

const TaskList = ({tasks, onDelete, onToggle}) => {  

    return (      
    <div className='TaskList'>
        {
            tasks.length > 0 ?
            tasks.map((task)=>{
                return (<Task 
                    onToggle = {onToggle}
                    onDelete={onDelete}
                    key={task.id} task={task}></Task>)
            }) :
            (<h3 style={{color: 'red'}}>No tasks to show</h3>)
        }
    </div>
      )  
}

export default TaskList;