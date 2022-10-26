import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type PropsType= {
    title: string
    
}



export const EditableSpan=( props: PropsType) => {
    let [edit,setEdit]= useState (true)
    const onDoubleClickHandler = ()=> {
        setEdit (true)
    }
   return (
    edit
    ? <input  value={props.title}/>
    :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
   ) 
}