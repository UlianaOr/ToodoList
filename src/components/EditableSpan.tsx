import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type PropsType= {
    title: string
    
}



export const EditableSpan=( props: PropsType) => {
    let [title, setTitle] = useState (props.title)

    const onChangeHandler = (event:ChangeEvent <HTMLInputElement>)=> {

    }

    let [edit,setEdit]= useState (false)
    const onDoubleClickHandler = ()=> {
        setEdit (true)
    }

    const onBlurHandler =()=> {
        setEdit (false)
    }
   return (
    edit
    ? <input  value={title} onChange={onChangeHandler} onBlur = {onBlurHandler} autoFocus ={true}/>
    :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
   ) 
}