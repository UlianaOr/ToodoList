import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTodolistActionType = {
    type: '',
    
}
export type AddTodolistActionType = {
    type: '',
   
}

type FirstActionType= ReturnType<typeof firstAC>
type SecondActionType= ReturnType<typeof secondAC>


type ActionsType = FirstActionType | SecondActionType | 

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case '':
            return state
        case '':
            return state
       
        default:
            return state
    }
}

export const firstAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: ''} as const
}
export const secondAC = (title: string): AddTodolistActionType => {
    return { type: '' } as const
}
