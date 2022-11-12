
import { TaskType } from "../Todolist";


export const TasksReducer = (state: Array <TaskType>, action:  tsarACType) => {
    switch (action.type) {
        case "REMOVE-TASK" : {
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