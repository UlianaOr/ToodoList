
import React, { ChangeEvent,KeyboardEvent, useState } from 'react';

import { FilterValuesType } from './App';
import { CheckBox } from './components/CheckBox';
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
    filter:FilterValuesType
    


}



export function Todolist(props: PropsType) {
    let[error,setError]=useState<string|null>(null)

    let [title,setTitle]= useState("")

    const addTask =()=> {
        if(title.trim()!==""){
        props.addTask(title.trim())
        setTitle("");
        }else{
           setError('Title is required')
        }
    }

    const onChangeHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        setError (null)
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


   /* const chengeFilterHandlerAll=()=>{
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
            <input value={title} className={error ? styles.error : ''}
            onChange={onChangeHandler} onKeyPress={onKeyPressHendler} />
            <button onClick={addTaskHandler}>+</button>
            {error && <div className={styles.errorMessages}>{error}</div>}
            
        </div>
          
            <ul>
                {props.tasks.map(t => {
                    const changeIsDoneHandler =(event:ChangeEvent<HTMLInputElement>)=> {
                        props.changeIsDone(t.id,event.currentTarget.checked)
                    }
                    return(

                     <li key= {t.id} className ={t.isDone ? styles.isDone: ""}>
                         <CheckBox isDone={t.isDone}callBack={(isDone)=>changeIsDoneHandler(t.id,isDone)}/>
                    
                    <span>{t.title}</span>
                    <button onClick={() => {props.removeTask(t.id)}}>x</button>

                </li>
                    )
                }
                
                

                )}

               
            </ul>
            <div>
                <button className={styles.activeFilter} onClick={()=>chengeFilterHandlerUniversal("All")}>All</button>

                <button className={styles.activeFilter} onClick={()=>chengeFilterHandlerUniversal("Active")}>Active</button>
                <button className={styles.activeFilter} onClick={()=>chengeFilterHandlerUniversal("Completed")}>Completed</button>
            </div>

        </div>
    )
}