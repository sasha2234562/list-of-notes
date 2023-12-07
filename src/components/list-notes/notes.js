import React from "react";
import {CreateNote} from "../create-note/create-note";
import {EditableSpan} from "../editable-span/editable-span";
import {Note} from "./note/note";
import n from "./notes.module.css"

export const Notes = (props) => {
// debugger
    return (
        <div className={n.notesContainer}>
            <EditableSpan listId={props.notes.listId} listName={props.notes.listName}/>
            <CreateNote listId={props.notes.listId} notes={props.notes.notes}/>
            <div>
                {props.notes.notes.map(n => {
                    return <Note key={n.id} listId={props.notes.listId} note={n}/>
                })}
            </div>
        </div>
    )
}