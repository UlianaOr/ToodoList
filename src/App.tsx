import React, {useState} from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {
    let [tasks1, setTasks1]= useState ([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isconstDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
       
    ])   

    
    const removeTask=(newId: number)=>{
        setTasks1(tasks1.filter((el :{})=>el.id !== newId))
    }
    return (
        <div className="App">

            <Todolist 
               title= "What are you doing" tasks={tasks1}
               removeTask={removeTask}
               />
        </div>

    );
}
          

export default App;
