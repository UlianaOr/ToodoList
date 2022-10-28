import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type PropsType= {
    title: string
    updateTask:(todolistId: string, id: string, title: string)=>void
    todolistId: string
    id: string
    
}



export const EditableSpan=( props: PropsType) => {
    let [title, setTitle] = useState (props.title)

    const onChangeHandler = (e:ChangeEvent <HTMLInputElement>)=> {
     setTitle (e.currentTarget.value)
    }

    let [edit,setEdit]= useState (false)
    const onDoubleClickHandler = ()=> {
        setEdit (true)
    }

    const onBlurHandler =()=> {
        setEdit (false)
        props.updateTask(props.todolistId, props.id, title)
    }
   return (
    edit
    ? <input  value={title} onChange={onChangeHandler} onBlur = {onBlurHandler} autoFocus ={true}/>
    :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
   ) 
}