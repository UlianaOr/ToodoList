
import React, { ChangeEvent,KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';
import styles from './Todolist.module.css'



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
    addTask:(title:string)=>void 
    changeIsDone:(id:string,isDone:boolean)=> void
    


}



export function Todolist(props: PropsType) {

    let [title,setTitle]= useState("")

    const addTask =()=> {
        if(title.trim()!==""){
        props.addTask(title.trim())
        setTitle("")
        }
    }

    const onChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHendler =(event: KeyboardEvent<HTMLInputElement>)=> {
        //console.log(event.charCode)
        if (event.key==="Enter"){
            addTask() 

        }

    }

    const addTaskHandler =() => {
        props.addTask(title)
        setTitle("")
    }


    /*const chengeFilterHandlerAll=()=>{
        props.changeFilter("All")
    }

    const chengeFilterHandlerActiv=()=>{
        props.changeFilter("Active")

    }*/

    const chengeFilterHandlerUniversal=(value: FilterValuesType)=>{
        props.changeFilter(value)

    }





        return (

        <div>
            <h3>{props.title}</h3>
            <div>
            <input value={title} className={styles.error}
            onChange={onChangeHandler} onKeyPress={onKeyPressHendler} />
            <button onClick={addTaskHandler}>+</button>
            
        </div>
          
            <ul>
                {props.tasks.map(t => {
                    const changeIsDoneHandler =(event:ChangeEvent<HTMLInputElement>)=> {
                        props.changeIsDone(t.id,event.currentTarget.checked)
                    }
                    return(

                     <li key= {t.id}>
                         <input type= "checkbox" checked={t.isDone} onChange={changeIsDoneHandler}/>
                    
                    <span>{t.title}</span>
                    <button onClick={() => {props.removeTask(t.id)}}>x</button>

                </li>
                    )
                }
                
                

                )}

               
            </ul>
            <div>
                <button onClick={()=>chengeFilterHandlerUniversal("All")}>All</button>

                <button onClick={()=>chengeFilterHandlerUniversal("Active")}>Active</button>
                <button onClick={()=>chengeFilterHandlerUniversal("Completed")}>Completed</button>
            </div>

        </div>
    )
}