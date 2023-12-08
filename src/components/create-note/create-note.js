import {addNote} from "../../store/reduser";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import n from "./create-note.module.css"

export const CreateNote = (props) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    let [arr, serArr] = useState([])
    const onChangeHandler = (e) => {
        setTitle(e.currentTarget.value);
        let arr = props.notes.filter(n => n.title.includes('#'));
        serArr(arr)
        setError(false)
    }
    console.log(arr)
    const createNote = () => {
        if (title.length >= 3) {
            dispatch(addNote(title, props.listId))
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
                {/*<input onChange={onChangeHandler} value={title}/>*/}
                <Button variant="contained" color="success" onClick={createNote}>
                    +
                </Button>
            </div>
            {error && <div className={n.error}>If the note length should be at least 3 characters.</div>}
            <div>{arr.map(n => <div>{n.title}</div>)}</div>
        </>
    )
}