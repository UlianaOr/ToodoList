
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
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


    return <div>
        <h3>
            {props.title}
            <button onClick={removeTodoListHandler}>X</button>
            </h3>
            <Input callBack = {addTaskHandler}/>


        {/*<div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
</div>*/}
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
                        <span>{t.title}</span>
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