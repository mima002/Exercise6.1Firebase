import { useState } from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import "./NamePicker.css";

// function for button to set or change username
function NamePicker(props) { 

    // state of the name 
    const [name, setName] = useState("");

    // state between showing and hiding text input 
    const [editName, setEditname] = useState(false);

    // click "set" button to set name entered as username and close text input space
    function set() {
        props.setUsername(name);
        setEditname(false);
    }

    //if user wants to edit name 
    if (editName) {
        // return text input and "set" button
        return (
            <div className = "name-picker">
                <input
                    className = "type-name"
                    onChange= {(e) => setName(e.target.value)}
                    value = {name}
                />
                <button className = "set-button" onClick = {set}>
                    SET
                </button>
            </div>
        );
    }

    // else return "Set Username" text with icon which will show text input (true) on click
    return(
        <div className = "name-picker">
            <span className = "name-set">{name || "Set Username"}</span>
                <MdDriveFileRenameOutline className = "set-icon" size = "24"
                    onClick= {() => setEditname(true)} />    
        </div> 
    );
}

export default NamePicker;