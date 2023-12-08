import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addList} from "../../store/reduser";
import a from "./add-new-list.module.css"

export const AddNewList = (props) => {
    const dispatch = useDispatch()
    const [valueList, setValueList] = useState('')
    const onChangeHandler = (e) => {
        setValueList(e.currentTarget.value)
    }
    const addListHandler = () => {
        debugger
        dispatch(addList(valueList))
        props.create(false)
    }

    return (
        <div className={a.addList}>
            <TextField value={valueList}
                       onChange={onChangeHandler}
                       label="Add new list"
                       variant="outlined"
                       autoFocus/>
            <Button style={{marginLeft: '10px'}} variant="outlined" onClick={addListHandler}>
                +
            </Button>
        </div>
    )
}
