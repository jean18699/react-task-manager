
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';



const App = ()=>{
  const [tasks, setTasks] = useState([]/*[
    {
        "id": 1,
        "title": "Doctors Appointment",
        "day": "Feb 5 at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "title": "Meeting at School",
        "day": "Feb 6 at 1:30pm",
        "reminder": true
    },
    {
      "id": 3,
      "title": "Play games",
      "day": "Feb 6 at 1:30pm",
      "reminder": false
  }
]*/)

const loadTasks = async()=>{
  const myTasks = await( await (await fetch("https://32006c5f-cc1b-40b8-8852-bb8ca448d1dc.mock.pstmn.io/tasks")).json());
  setTasks(myTasks);
}

useEffect(()=>{ 
  loadTasks();

},[])
 

  // Estados en react. Se utiliza la notacion de corchete. En el primer
    // parametro indicamos la variable de estado, y en el segundo la funcion
    // que permite cambiar esa variable. Con use state declaramos cual
    // es el valor inicial de tasks. Se necesita usar setTask si se quiere
    // modificar el tasks porque los estados son inmutables fuera de su
    // funcion de cambio
    

  const addTask = (task)=>{
    setTasks([...tasks, task]);

  }

  const deleteTask = (id)=>{

    setTasks(tasks.filter((task)=> task.id !== id))

    console.log('delete', id);
  }

  const toggleReminder = (id) => {

    tasks.forEach((task =>{ 
      if(task.id === id){
        task.reminder = !task.reminder;
        setTasks([...tasks])
      }
    }))
  }


  return (
    <div className="App">
      <Header onCreate={addTask}/>
      <AddTask 
        onAdd={addTask}/>
      <TaskList 
        onToggle={toggleReminder} 
        onDelete={deleteTask} 
        tasks={tasks}/>
      
    </div>
  );
};



export default App;
