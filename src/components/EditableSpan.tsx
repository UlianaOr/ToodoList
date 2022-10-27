import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type PropsType= {
    title: string
    
}



export const EditableSpan=( props: PropsType) => {
    let [edit,setEdit]= useState (true)

    const onDoubleClickHandler = ()=> {
        setEdit (true)
    }

    const onBlurHandler =()=> {
        setEdit (false)
    }
   return (
    edit
    ? <input  value={props.title} onBlur = {onBlurHandler} autoFocus/>
    :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
   ) 
}