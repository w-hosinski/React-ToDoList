import React, {useState} from 'react'

const ToDo = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const removeItem = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks)
  }

  const updateTasks = () => {
    setTasks([...tasks, {id: input, name: input}])
    setInput("")
  }
  return (<>
    <div className="boundingBox">
      <input className="inputField" value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button className="addTaskBtn" onClick={updateTasks}>Add Task</button>
      <button className='btn' onClick={() => setTasks([])}>Clear All Tasks</button>

      <div className="listTask">
      {tasks.map((task) => {
        const { id, name } = task
        return (
          <div key={id} className='task'>
            <h4 className="name">{name}</h4>
            <input type="checkbox"></input>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        )
      })}
      </div>
    </div>
    </>
  )
}


export default ToDo