
import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';

import {Todolist} from './Todolist';


function App() {

   

   const[tasks1,setTasks1]=useState (
        [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false }
        ]
    )

    const[filter, setFilter] = useState ('All')
   
    const removeTask=(id:number)=>{
      setTasks1(tasks1.filter((el)=>el.id !== id))
    }

    //переменная filteredTask

    let filteredTask =tasks1

if (filter==='Activ') {
    filteredTask=tasks1.filter((el)=>!el.isDone)
}

if (filter==='Completed') {
    filteredTask=tasks1.filter((el)=>el.isDone)
}

    


const changeFilter=(filterValue:string)=>{
 console.log(filterValue)
 setFilter(filterValue)
}

    return (
        <div className="App">
            
            <Todolist 
              title="What to learn"
              tasks={filteredTask}
              removeTask={removeTask} 
              changeFilter={changeFilter}/>
      
            
        </div>
    );
}

export default App;