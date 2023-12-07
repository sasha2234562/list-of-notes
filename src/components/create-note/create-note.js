import {addNote} from "../../store/reduser";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import n from "./create-note.module.css"

export const CreateNote = (props) => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    let [arr,serArr] = useState([])
    const onChangeHandler = (e) => {
        setTitle(e.currentTarget.value);
       let arr = props.notes.filter(n => n.title.includes('#'));
        serArr(arr)
    }
    console.log(arr)
    const createNote = () => {
        if (title.length !== 0) {
            dispatch(addNote(title, props.listId))
            setTitle('')
        }
    }
    return (

        <>
            <div className={n.containerCreateNote}>
                <input onChange={onChangeHandler} value={title}/>
                <Button variant="contained" color="success" onClick={createNote}>
                    +
                </Button>
            </div>
            <div>{arr.map(n=> <div>{n.title}</div>)}</div>
        </>
    )
}