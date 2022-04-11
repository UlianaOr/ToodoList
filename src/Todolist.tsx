
import { type } from "os";
import React from "react";

type PropsType={
    topic1: string
    arr:Array<TaskType>
}

type TaskType={
    id: number,
    title: string,
    isDone: boolean
}

 export const Todolist=(props:PropsType)=>{
    return(
        <div>
                <h1>{props.topic1}</h1>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.arr.map((el :TaskType)=>{
                        return(
                            <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>

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