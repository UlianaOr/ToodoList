
import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';

import {Todolist} from './Todolist';


function App() {

   

    let [tasks,setTasks]=useState (
        [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false }
        ]
    )


        function removeTask(id:string){
        let filteredTask=tasks.filter(t =>t.id !=id);
        setTask(filteredTask);
    }



    let [filter, setFilter] = useState <FilterValuesType> ('All')
   
    

    

    let tasksForTodolist= tasks;

if (filter==='Activ') {
    tasksForTodolist=tasks.filter(t => t.isDone === false)
}

if (filter==='Completed') {
    tasksForTodolist=tasks.filter(t => t.isDone === false)
}

    


    function changeFilter (value: FilterValuesType) {
        setFilter(value)
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