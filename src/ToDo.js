import React, {useState} from 'react'

const ToDo = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const removeItem = id => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks)
  }

  const updateTasks = () => {
    setTasks([...tasks, {id: input, name: input, completed: false}])
    setInput("")
  }

  const handleCompleted = id => {
    console.log("TEST")
    let mapped = tasks.map((task)=>{
      return task.id === id ? {...task, completed: !task.completed} : { ...task}})
    setTasks(mapped)
  }

  const removeCompleted = () => {
    let newTasks = tasks.filter((task) => task.completed === false);
    setTasks(newTasks)
  }

  return (
    <div className="boundingBox">
      <input className="inputField" value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button className="addTaskBtn" onClick={updateTasks}>Add Task</button>
      <button className='btn' onClick={removeCompleted}>Clear All Completed</button>
      <button className='btn' onClick={() => setTasks([])}>Clear ALL</button>
      
      <div className="listTask">
        {tasks.map((task) => {
          const { id, name } = task
          return (
            <div key={id} className="task">
              <h4 type="button" onClick={()=>handleCompleted(id)} className={task.completed ? "strike" : ""}>{name}</h4>
              <button onClick={() => removeItem(id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ToDo