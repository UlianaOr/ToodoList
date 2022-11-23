import { type } from 'os';
import { v1 } from 'uuid';
import {TodolistType} from '../App';

type ActionType = {
    type: string
    [key: string] : any
}

export const todolistsReducer= (state: Array <TodolistType>, action: ActionType) => {
    switch(action.type) {
        case 'REMOVE-TODOLIST':{

            
           return state.filter (el=>el.id!==action.payload.todolistId1)
        }
        case 'ADD-TODOLIST':{
            let newTodolist: TodolistType = {id: v1(), title:action.payload.newTodolistTitle, filter: 'all'};
            //setTodolists([newTodolist, ...todolists]);
           // setTasks({
            //...tasks,
            //[newTodolistId]: []
            return [...state, newTodolist]
        }
        default:
            return state


    }

}
type tsarType=removeTodolistACType
type removeTodolistACType=ReturnType<typeof removeTodolistAC>
export const removeTodolistAC=(todolistId1:string)=>{
    return{
        type: 'REMOVE-TODOLIST', 
        payload: {todolistId1}
    } as const
}


type addTodolistACType=ReturnType<typeof addTodolistAC>
export const addTodolistAC=(newTodolistTitle: string)=> {
    return {
        type: 'ADD-TODOLIST', 
        payload: {newTodolistTitle}
    } as const
    
}