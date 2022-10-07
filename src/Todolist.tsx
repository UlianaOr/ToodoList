
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import { EditableSpan } from './components/EditableSpan';
import { Input } from './components/input';


type TaskType = {

    id: string
    title: string
    isDone: boolean
    
}

type PropsType = {

    id: string
    todoListID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todoListID:string, taskId: string) => void
    changeFilter: (todoListID:string,value: FilterValuesType) => void
    addTask: (todoListID: string, title: string) => void
    changeTaskStatus: (todoListID:string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodoList: (todoListID: string) =>void
    editTask:(todoListID: string, taskId: string, newTitle: string)=>void
   
}

export function Todolist(props: PropsType) {

 

    const onAllClickHandler = () => props.changeFilter(props.todoListID,"all");
    const onActiveClickHandler = () => props.changeFilter(props.todoListID,"active");
    const onCompletedClickHandler = () => props.changeFilter(props.todoListID,"completed");

    const removeTodoListHandler =() => {
        props.removeTodoList(props.todoListID)

    }

    const addTaskHandler =(newTitle: string) => {
        props.addTask(newTitle, props.id)
    }

    const editTaskHandler=(taskID:string, newTitle:string)=> {
        props.editTask(props.id,taskID,newTitle)
    }


    return <div>
        <h3>
            {props.title}
            <button onClick={removeTodoListHandler}>X</button>
            </h3>
            <Input callBack = {addTaskHandler}/>



        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.todoListID,t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todoListID,t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                              
                        <EditableSpan title= {t.title} callBack = { (newTitle)=>editTaskHandler(t.id,newTitle)}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}