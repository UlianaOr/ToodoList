
import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';

import {Todolist} from './Todolist';

export type FilterValuesType = "All"|"Active"|"Completed";


function App() {

   

    let [tasks,setTasks]=useState (
        [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false }
        ]
    )

    const addTask=()=> {
        console.log("jjhh")
    }


        function removeTask(id:string){
        let filteredTask=tasks.filter(t =>t.id !=id);
        setTasks(filteredTask);
    }



    let [filter, setFilter] = useState <FilterValuesType> ('All')
   
    

    

    let tasksForTodolist= tasks;

if (filter==='Active') {
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
              tasks={tasksForTodolist}
              removeTask={removeTask} 
              changeFilter={changeFilter}
              addTask= {addTask}
              />
      
            
        </div>
    );
}

export default App;