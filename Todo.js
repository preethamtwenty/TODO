import React, { useState } from 'react';
import './Todo.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import {db} from './firebase'
function Todo({todo_content,postId}) {
     
    const[complete,setComplete]=useState('');
    const addtocomplete=(e)=>{
        e.preventDefault();
        db.collection('completed').add({
           
            completed:todo_content
          })
       
        db.collection("todos").doc(postId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        
        
    }

    const deletetodo=()=>{
        db.collection("todos").doc(postId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

    }
    return (
        <div className="todo">
        <div className="todo_item">
        {/*<FiberManualRecordIcon className="dot_icon" ></FiberManualRecordIcon>>*/}
        <div className="todo_content" >
        {todo_content} 
        </div>
        <div className="icons">
        <CheckIcon className="done_icon" onClick={addtocomplete}></CheckIcon>
        <ClearIcon className="delete_icon" onClick={deletetodo}></ClearIcon>
        
        </div>
        
        </div>
        
            
        </div>
    )
}

export default Todo
