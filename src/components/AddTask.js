import { useState } from "react"

const AddTask = ({onAdd})=>{

    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const createTask = ()=>{
        return {
            id: 5,
            title: title,
            day: day,
            reminder: reminder
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!title){
            alert('Must give a title')
        }else
        {
            onAdd({title, day, reminder});
        }
       
    }

    return (
        <form   className="add-form" onSubmit={(e)=>{onSubmit(e)}}>
            <div className="form-control">
                <label>Task Title</label>
                <input 
                    type='text' 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)} 
                    placeholder="Add Task Name" />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type='text' 
                    value={day} 
                    onChange={(e)=> setDay(e.target.value)} 
                    placeholder="Add Day & Time" />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    value={reminder} 
                    onChange={(e)=> setReminder(e.currentTarget.checked)} 
                    type='checkbox'></input>
            </div>

            <input 
                className="btn btn-block" 
                type='submit' 
                
                value='Save Task' />
         
        </form>
    )
}

export default AddTask