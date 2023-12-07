import {IconButton, Rating, TextField} from "@mui/material";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import n from "./note.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteNote, pickOutNote, updateNote} from "../../../store/reduser";
import GradeIcon from '@mui/icons-material/Grade';

export const Note = (props) => {
    const [update, setUpdate] = useState(false)
    const [valueNote, setValueNote] = useState(props.note.title)
    const dispatch = useDispatch()
    const updateNoteHandler = () => {
        setUpdate(true)
    }
    const changeNoteHandler = (e) => {
        setValueNote(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        dispatch(updateNote(valueNote, props.listId, props.note.id))
        setUpdate(false)
    }
    const deleteNoteHandler = () => {
        dispatch(deleteNote(props.listId, props.note.id))
    }
    const gradeIconStyle = {
        color: props.note.important ? "yellow" : "grey",
        margin: '0 20px'
    }
    return (
        <>
            <div className={n.containerNote}>
                <div>
                    <GradeIcon onClick={()=> {dispatch(pickOutNote(props.listId, props.note.id, !props.note.important))}} style={{ color: gradeIconStyle.color, margin: gradeIconStyle.margin }}/>
                {update
                    ? <TextField autoFocus id="standard-basic" variant="standard" value={valueNote}
                                 onChange={changeNoteHandler} onBlur={onBlurHandler}/>
                    : <span onDoubleClick={updateNoteHandler}>{props.note.title}</span>}
                </div>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon onClick={deleteNoteHandler} fontSize={"small"}/>
                </IconButton>
            </div>
            <hr/>
        </>
    )
}