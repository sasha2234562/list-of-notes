import './App.css';
import {useSelector} from "react-redux";
import {Notes} from "./components/list-notes/notes";
import React, {useState} from "react";
import {AddNewList} from "./components/addNewList/add-new-list";
import i from "./images/png-transparent-content-creator-thumbnail.png"
function App() {
    const state = useSelector(state => state)
  const [create, setCreate] = useState(false)

    return (
        <div className="App">
            {!create
                ?<div><img src={i} style={{width: "5%"}} onClick={()=> {
                    setCreate(true)
                }}/> Create new list</div>
            :<AddNewList create={setCreate}/>}
            <div className={"content"}>
                {state.notes.map(n => {
                    // debugger
                    return <Notes key={n.listId} notes={n}/>
                })}
            </div>
        </div>
    );
}

export default App;
