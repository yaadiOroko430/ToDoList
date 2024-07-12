import React, {useState} from 'react';
function ToDoList(){
    const [tasks ,setTask]=useState(["Eat breakfast","take a shower","go work"]);
    const [newTask ,setnewTask]=useState("");


    function handleInputChange(event){
        setnewTask(event.target.value);

    }
   function addTask(){
    
    if(newTask.trim() !== ""){
        setTask(t=>[...t,newTask]);
    setnewTask("");

    }

   }
   function deleteTask(index){
    const updateTask=tasks.filter((_,i)=>i!==index);
    setTask(updateTask);

   }
   function moveUp(index){
    if(index>0){
        const updateTask=[...tasks];
        [updateTask[index],updateTask[index-1]]=
        [updateTask[index-1],updateTask[index]];
        setTask(updateTask);
    }

   }
   function moveDown(index){
    if(index < tasks.length-1){
        const updateTask=[...tasks];
        [updateTask[index],updateTask[index+1]]=
        [updateTask[index+1],updateTask[index]];
        setTask(updateTask);

   }
}
   return(
    <div className='to-do-list'>
        <h2>To Do List</h2>
        <div>
            <input type="text" value={newTask} placeholder='Enter a task ...' onChange={handleInputChange}/>
            <button className='addButton' onClick={addTask}>add</button>
        </div>
        <ol>{tasks.map((task,index)=><li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
            <button className='move-up-btn' onClick={()=>moveUp(index)}>Move Up</button>
            <button className='move-down-btn' onClick={()=>moveDown(index)}>Move down</button>
            
            
            </li>)}
            
            
            
            </ol>

    </div>
   );
}
export default ToDoList