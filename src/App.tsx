import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {
    const tasks1  = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
       
    ]

    const tasks2 = [
        {id: 1, title: "HTML&CSS222", isDone: true},
        {id: 2, title: "JS22", isDone: true},
        {id: 3, title: "ReactJS222", isDone: false},
        {id: 4, title: "Rest API222", isDone: false},
        {id: 5, title: "GraphQL222", isDone: false},
    ]
    return (
        <div className="App">

            <Todolist topic1={'What to learn111'} arr={tasks1}/>
            <Todolist topic1={'Hello22222'} arr={tasks2}/>
            {/*<div>
                <h1>What to learn</h1>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
    </div>*/}
        </div>
    );
}

export default App;
