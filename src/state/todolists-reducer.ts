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
        
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
           // const todolist = todolists.find(tl => tl.id === id);
           //if (todolist) {
            // если нашёлся - изменим ему заголовок
           // todolist.title = title;
           // setTodolists([...todolists]);
       // }
            return state.map (el=>el.id===action.payload.todolistId2 ? {...el,title:action.payload.newTodolistTitle}:el)
        }
        default:
            return state


    }

}
type tsarType=removeTodolistACType | addTodolistACType | changeTodolistTitleAC
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

type changeTodolistTitleAC=ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC=(todolistId2:string,  newTodolistTitle:string)=> {
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
         todolistId2,
         newTodolistTitle
        }
    }as const
}