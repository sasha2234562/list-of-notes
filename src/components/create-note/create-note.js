import {addNote} from "../../store/reduser";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import n from "./create-note.module.css"

export const CreateNote = (props) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch()
    const onChangeHandler = (e) => {
        const inputText = e.target.value;
        const newTags = inputText.match(/#(\w+)/g) || [];
        setTags(newTags);
        setTitle(e.currentTarget.value);
        setError(false)
    }
    const createNote = () => {
        if (title.length >= 3) {
            dispatch(addNote(title, props.listId, tags))
            setTitle('')
        } else {
            setError(true)
        }
    }
    return (
        <>
            <div className={n.containerCreateNote}>
                <TextField
                    className={n.textFielD}
                    error={error}
                    id="outlined-error"
                    onChange={onChangeHandler}
                    value={title}
                />
                <Button variant="contained" color="success" onClick={createNote}>
                    +
                </Button>
            </div>
            {!!tags.length && <ul className={n.tags}>
                Tags:
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>}
            {error && <div className={n.error}>If the note length should be at least 3 characters.</div>}
        </>
    )
}