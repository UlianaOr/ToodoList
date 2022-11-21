import {TodolistType} from '../App';

type ActionType = {
    type: string
    [key: string] : any
}

export const todolistsReducer= (state: Array <TodolistType>, action: ActionType) => {
    switch(action.type) {
        case 'XXX':
           return state;
        default:
            throw new Error ("I dont understand this type")


    }

}