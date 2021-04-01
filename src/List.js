import React, { useState } from "react";
import './App.css'
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {

    const [line, setline] = useState(false);

    const cutit = () =>{
        setline(true);
    }
    
    return (
        <>
        <div className="todo_list">
            <button className="delete" onDoubleClick={()=>{
                props.onSelect(props.id) }} onClick={cutit}
            ><DeleteIcon style={{fontSize:"25px"}}/></button>
            <li className="listItem"
            style={{textDecoration: line ? "line-through":"none"}}>{props.textValue}</li>
        </div>
        </>
    )
}

export default List;