
import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType= {
    id:string,
    title:string,
    filter:FilterValuesType
}

function App() {
    let todolistID1=v1();
    let todolistID2=v1();
    

    let [todolists, setTodolist] = useState<Array<TodoListsType>> ([
        {id:todolistID1, title:'What to learn', filter:'all'},
        {id:todolistID2,title:'What to buy', filter:'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
        [todolistID2] : [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
            
        ]
});

    // console.log(tasks[todolistID1])
   // let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(todolistID:string,taskId: string) {
        setTasks({...tasks, [todolistID1] : tasks [todolistID] . filter(el=> el.id !== taskId)})
       // let filteredTasks = tasks.filter(t => t.id != id);
       // setTasks(filteredTasks);
    }

    function addTask(title: string) {
        //let task = {id: v1(), title: title, isDone: false};
        //let newTasks = [task, ...tasks];
       // setTasks(newTasks);
    }

   

    function changeStatus(taskId: string, isDone: boolean) {
        //let task = tasks.find(t => t.id === taskId);
       // if (task) {
           // task.isDone = isDone;
        }

       // setTasks([...tasks]);
    }


   

    function changeFilter(todolistID:string,value: FilterValuesType) {
        setTodolist (todolists.map (el =>el.id === todolistID ? {...el, filter: value} : el ));
       // setFilter(value);
    


    return (
        <div className="App">

            {todolists.map((el: TodoListType) => {
                 let tasksForTodolist = tasks [el.id];

                 if (el.filter === "active") {
                     tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                 }
                 if (el.filter === "completed") {
                     tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                 }

                return (
                    <Todolist 
                    key= {el.id}
                    todolistID={el.id}
                    title={el.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                     />

                )
            })}
            
                    
        </div>
    )}

        

export default App;