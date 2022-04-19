
import { type } from "os";
import React from "react";

type PropsType={
    title: string
    tasks: Array <TaskType>
    removeTask: (id:number)=>void
}

type TaskType={
    id: number,
    title: string,
    isDone: boolean
}

 export function Todolist=(props:PropsType) {
    return <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el :TaskType)=>{
                        return(
                            <li key={el.id}
                        )
                    })}
                    {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    )

}