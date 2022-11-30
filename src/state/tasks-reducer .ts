import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTodolistActionType = {
    type: '',
    
}
export type AddTodolistActionType = {
    type: '',
   
}

export type FirstActionType= ReturnType<typeof removeTaskAC>
export type SecondActionType= ReturnType<typeof secondAC>


type ActionsType = FirstActionType | SecondActionType 

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistId]: state [action.todolistId].filter (task => task.id ! == action.taskId)
            }

        case '':
            return state
       
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return { type: 'REMOVE-TASK', taskId, todolistId: todolistId} as const
}
export const secondAC = (title: string) => {
    return { type: '' } as const
}
