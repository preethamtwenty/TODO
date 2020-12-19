import React,{useState,useEffect} from 'react';
import './Body.css';
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo';
import {db} from './firebase';
import Completed from './Completed';
function Body() {
    const[todo,setTodo]=useState('');
    const[posts,setPosts]=useState([]);
    const[c_todos,setc_Todos]=useState([])

    const addtodo=(e)=>{
        e.preventDefault();
        db.collection('todos').add({
           
            todo:todo
          })
        setTodo('')
        
    }

    useEffect(() => {
        db.collection("todos")
         
          .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
              { postId: doc.id, 
                post_todo: doc.data() 
              })))
          );
      }, []);

      useEffect(() => {
        db.collection("todos")
         
          .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
              { postId: doc.id, 
                post_todo: doc.data() 
              })))
          );
      }, []);

      useEffect(() => {
        db.collection("completed")
         
          .onSnapshot((snapshot) =>
            setc_Todos(snapshot.docs.map((doc) => (
              { c_Id: doc.id, 
                c_todo: doc.data() 
              })))
          );
      }, []);


    return (
        <div className="body">
            <div className="body_left">
            <center>
           
            
            </center>
            
            </div>

            <div className="body_middle">
        
            <div className="input_area">
            <input type="text" placeholder="add a todo" className="input_bar" 
            onChange ={e=>setTodo(e.target.value)} 
            value={todo}></input>
            <AddIcon  className="add_icon" onClick={addtodo} ></AddIcon>
            </div>
           

            <div className="body_main">
            <div className="Todo">
            {posts.map(({ postId, post_todo }) => (
                <Todo
                todo_content={post_todo.todo}
                postId={postId}
                />))}
            </div>
            
            <div className="Completed"> {c_todos.map(({ c_Id, c_todo }) => (
                <Completed
                completed_todo={c_todo.completed}
                />))}</div>
            </div>
            </div>
            <div className="body_right"></div>
            
            
        </div>
    )
}

export default Body
