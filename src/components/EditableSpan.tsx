import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type PropsType= {
    title: string
    
}



export const EditableSpan=( props: PropsType) => {
    let [edit,setEdit]= useState (false)
   return (
    edit
    ? <input value={props.title}/>
    :<span>{props.title}</span>
   ) 
}