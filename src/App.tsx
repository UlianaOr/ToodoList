import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {
//let tasks1  = [
//{id: 1, title: "HTML&CSS", isDone: true},
      //  {id: 2, title: "JS", isconstDone: true},
      //  {id: 3, title: "ReactJS", isDone: false},
      //  {id: 4, title: "Rest API", isDone: false},
       
    //]

    const [tasks1, setTasks1]= useState ([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isconstDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
       
    ])   

    
    const removeTask=(newid: number)=>{
        tasks1 =tasks1.filter((el:)=>el.id!==newid)
        console.log()
    }
    return (
        <div className="App">

            <Todolist 
               title= "What are you doing"
               tasks={tasks1}
               removeTask={removeTask}
               />
        </div>

    );
}
          

export default App;
