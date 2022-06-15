
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

    const addTask=(title:string)=> {
        let task = {id: v1(), title: title, isDone: false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
       
    }

    const changeIsDone =(id:string,isDone:boolean)=> {
        setTasks(tasks.map(el=>el.id===id ? {...el,isDone:isDone} :el))

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
    tasksForTodolist=tasks.filter(t => t.isDone === true)
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
                addTask={addTask} 
                changeIsDone={changeIsDone}
                filter={filter}
                            />
      
            
        </div>
    );
}

export default App;