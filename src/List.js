import React from "react";
import './App.css'

const List = (props) => {

    
    return (
        <>
        <div className="todo_list">
            <button className="delete" onClick={()=>{
                props.onSelect(props.id)
            }}>x</button>
            <li className="listItem">{props.textValue}</li>
        </div>
        </>
    )
}

export default List;