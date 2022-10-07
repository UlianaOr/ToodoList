import React, { ChangeEvent,useState } from "react";



type EditableSpanPropsType = {
    title: string
    callBack: (newTitle:string) => void
};

export const EditableSpan =(props:EditableSpanPropsType) => {
    let [newTitle, setNewTitle] = useState(props.title)

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        console.log ()
    }


       const addTitle = () => {
        
        if (newTitle!== "") {
            props. callBack (newTitle);
           
    }
}


    const [edit,setEdit]= useState (false)
    const onDobleClicHandler =() => {
          setEdit(!edit)
          addTitle ()
    }
    return (
        edit
        ? <input autoFocus onBlur={onDobleClicHandler} value={newTitle} onChange ={onChangeHandler}/>
        : <span onDoubleClick={onDobleClicHandler}>{props.title}</span>
    );
};


