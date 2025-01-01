import { useState } from "react"
import {v4 as uuidv4} from "uuid"


export default function TodoList(){
    let [todos, setTodo] = useState([{task: "sample task", id:  uuidv4(), isDone: false}]);
    let [newtodo, setNewtodo] = useState("");

    let addNewtask = ()=>{
      setTodo((preTodos)=>{
        return [...preTodos, {task: newtodo, id:uuidv4(), isDone: false} ]
      });
      setNewtodo("");
    };
    let updateTodo = (event)=>{
   setNewtodo(event.target.value);
    };
    
    let deleteTodo = (id)=>{
        setTodo((pretodo)=>todos.filter((pretodo)=>pretodo.id != id));
    }
    let markasDone =(id)=>{
      setTodo((preTodos)=>{
        preTodos.map((todo)=>{
            if(todo.id== id){
                return {
                    ...todo,
                    isDone: true,
                };
            }else{
                return todo;
            }
        }
    )}
    );
    };
    return (
        <div>
            <input placeholder="add a task" value={newtodo} onChange={updateTodo}></input>
            <br></br>
            <button onClick={addNewtask} >Add Task</button>
            <br></br> <br></br>
            <hr></hr>
            <h4>task to-do</h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=> deleteTodo(todo.id)}>delete</button>&nbsp;&nbsp;
                        <button onClick={()=> markasDone(todo.id)}>Mark as Done</button></li>
                ))}
            </ul>
        </div>
    )
}