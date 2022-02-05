// import { useState } from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import "./namePicker.css";

// function for button to set or change username
function NamePicker(props) { 

    return(
        <div className = "enter-name">
            <button className = "name-set" onClick = {props.editName}>
                <MdDriveFileRenameOutline style={{height:20, width:20}} />    
            </button>
        </div> 
    );
}

export default NamePicker