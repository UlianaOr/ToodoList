
import React, { useState } from 'react';
import './App.css';

import {Todolist} from './Todolist';

function App() {

   

   const[tasks1,setTasks1]=useState(
        [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false }
        ]
    )

    const[filter, setfilter] = useState ('All')
   
    const removeTask=(id:number)=>{
      setTasks1(tasks1.filter((el)=>el.id !== id))
    }

    let filteredTask =tasks1

if (filter==='Activ') {
    filteredTask=tasks1.filter((el)=>!el.isDone)
}

if (filter==='Completed') {
    filteredTask=tasks1.filter((el)=>el.isDone)
}

    


const changeFilter=(filterValue:string)=>{
 console.log(filterValue)
}

    return (
        <div className="App">
            
            <Todolist title="What to learn" tasks={tasks1} removeTask={removeTask} changeFilter={changeFilter}/>
      
            
        </div>
    );
}

export default App;