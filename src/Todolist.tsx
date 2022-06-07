
import React, { ChangeEvent,KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';



type TaskType = {
    id: string
    title: string
    isDone: boolean
}



type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(taskId:string)=>void
    changeFilter:(value: FilterValuesType)=>void
    addTask:(newTitle:string)=>void 


}

export function Todolist(props: PropsType) {
    let [newTitle,setNewTitle]= useState("")

    const onChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        setNewTitle(event.currentTarget.value)
    }

    const onKeyPressHendler =(event: KeyboardEvent<HTMLInputElement>)=> {
        //console.log(event.charCode)
        if (event.key==="Enter"){
            addTaskHandler() 

        }

    }

    const addTaskHandler =() => {
        props.addTask(newTitle)
        setNewTitle("")
    }


    const chengeFilterHandlerAll=()=>{
        props.changeFilter("All")
    }

    const chengeFilterHandlerActiv=()=>{
        props.changeFilter("Active")

    }



        return (

        <div>
            <h3>{props.title}</h3>
            <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHendler} />
            <button onClick={addTaskHandler}>+</button>
            
        </div>
          
            <ul>
                {props.tasks.map(t => <li key= {t.id}>
                    <input type ="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {props.removeTask(t.id)}}>x</button>

                </li>

                )}

               
            </ul>
            <div>
                <button onClick={chengeFilterHandlerAll}>All</button>

                <button onClick={chengeFilterHandlerActiv}>Active</button>
                <button onClick={()=>{props.changeFilter("Completed")}}>Completed</button>
            </div>

        </div>
    )
}