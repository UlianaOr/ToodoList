import { type } from "os";
import { TaskType } from "../Todolist";


export const TasksReducer = (state: Array <TaskType>, action: any) => {
    switch (action.type) {
        case 'XXX' : {
            return state
        }

        default:
            return state
    }
}

type tsarACType=removeTaskACType
type removeTaskACType=ReturnType<typeof removeTaskAC>
const removeTaskAC = () => {
    return {
        type: "REMOVE-TASK",
        playload: {}
    } as const
}