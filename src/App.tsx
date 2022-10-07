
import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import { TLSSocket } from 'tls';
import { Input } from './components/input';
import { EditableSpan } from './components/EditableSpan';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType= {
    id:string,
    title:string,
    filter:FilterValuesType
}

function App() {
    let todoListID1=v1();
    let todoListID2=v1();
    

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>> ([
        {id:todoListID1, title:'What to learn', filter:'all'},
        {id:todoListID2,title:'What to buy', filter:'all'},
    ])

    let [tasks, setTasks] = useState({
        [todoListID1]:[
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ],
        [todoListID2] : [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
            
        ]
});


    // подключение EditableSpan

    const editTask=(todoListID: string, taskId: string, newTitle: string) => {
        console.log (newTitle)
    }
    
    //
    
    const addTodoList = (newTitle: string,) => {

        let newID =v1 ()
        let newTodoList: TodoListsType = {id: newID, title: newTitle, filter:'all'};

        setTodoLists([newTodoList,... todoLists])
         setTasks( {...tasks, [newID]:[]})

    }

    const removeTodoList =(todoListID:string,) =>{
        setTodoLists(todoLists.filter (el=>el.id! ===todoListID))
        delete tasks [todoListID]
        console.log(tasks)

    }

    function removeTask(todoListID:string,taskId: string) {
       setTasks({...tasks, [todoListID] : tasks [todoListID] . filter(el=> el.id !== taskId)})
       // let filteredTasks = tasks.filter(t => t.id != id);
       // setTasks(filteredTasks);
    }

    function addTask(title: string, todoListID: string) {
        let task = {id: v1(), title: title, isDone: false};
        let todoListTasks = tasks [todoListID];
        tasks[todoListID] = [task, ... todoListTasks];
        //setTasks({...tasks, [todoListID]: [newTask,...tasks[todoListID]]})
        //let task = {id: v1(), title: title, isDone: false};
        //let newTasks = [task, ...tasks];
       // setTasks(newTasks);
    }

   

    function changeStatus(todoListID:string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListID] : tasks [todoListID].map(el=>el.id === taskId ? {...el, isDone: isDone} : el)})
        //let task = tasks.find(t => t.id === taskId);
       // if (task) {
           // task.isDone = isDone;
        }

       // setTasks([...tasks]);
    


   

    function changeFilter(todoListID:string,value: FilterValuesType) {
       // setTodoList (todoLists.map (el =>el.id === todoListID ? {...el, filter: value} : el ));
       // setFilter(value); 
    }
    


    return (
        <div className="App">

            <Input callBack ={addTodoList}/>

               {todoLists.map((el: TodoListsType  ,index: number)=>{
                let tasksForTodoList = tasks[el.id];
                if (el.filter === "active") {
                    tasksForTodoList = tasks[el.id].filter (t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodoList = tasks [el.id].filter (t => t.isDone === true)
                }
                return(
                    
                    <Todolist 
                    key= {el.id}
                    id= {el. id}
                    todoListID={el.id}
                    title={el.title}
                    tasks={tasksForTodoList}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                    removeTodoList= {removeTodoList}
                    
                     />

                    
                )

            })} 
                 
            
                    
        </div>
    )}

        

export default App;