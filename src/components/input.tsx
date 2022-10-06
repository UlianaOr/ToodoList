import { type } from "os";
import React, { KeyboardEvent,ChangeEvent, useState } from "react";

 type InputPropsType = {
    callBack: (newTitle:string)=> void
}

 

export const Input =(props:InputPropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log ()
    }

    const addTask = () => {
        let newTitle = title.trim();
        if (title.trim() !== "") {
            props. callBack (newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}