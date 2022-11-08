import { Button, IconButton, TextField } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
       
         <TextField
         error={!!error} 
         id="outlined-basic" 
         label={error}
         variant="outlined" 
         value={title}
         onChange={onChangeHandler}
         onKeyPress={onKeyPressHandler}
         size={'small'}
         //className={error ? "error" : ""}
         /> 
        
         <Button variant="contained" color="primary" onClick={addItem} style = {{maxWidth:'40px', maxHeight: '40px',minHeight: '40px', minWidth: '40px', backgroundColor: 'salmon'}}>NEW</Button> */}
          
        
        {error && <div className="error-message">{error}</div>}
    </div>
}
