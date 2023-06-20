import React, { useEffect, useState } from "react"
import axios from "axios"

const App=()=>{
  let [taskdata, setTaskData]=useState([])
  let [task, setTask]=useState("")
  let [description, setDescription]=useState("")
  let [completed, setCompleted]=useState(false)

  let handleSubmit=(e)=>{
    e.preventDefault()
    let payload={
      task,
      description,
      completed
    }
    axios.post("http://localhost:5000/task-manager/task", payload)
  }

  useEffect(()=>{
    let fetchData=async()=>{
      let {data}=await axios.get("http://localhost:5000/task-manager/task")
      setTaskData(data)
      console.log(data)
    }
    fetchData()
  },[])

  let handleComplete=(id)=>{
    setCompleted({...state,[e.target.name]:e.target.value})

    axios.put(`http://localhost:5000/task-manager/task/${id}`)
  }

  return(
    <>
    <form>
      <fieldset>
        <legend>Task manager</legend>
          <div>
            <label htmlFor="task">Task : </label>
            <input type="text" name="task" id="task" value={task} onChange={(e)=>{
              setTask(e.target.value)
            }}/>
            <br/><br/>
            <label htmlFor="desc">Task description</label>
            <input type="text" id="desc" name="desc" value={description} onChange={(e)=>{
              setDescription(e.target.value)
            }}/>
            <br/><br/>
            <button onClick={handleSubmit}>Submit</button>
          </div>
      </fieldset>
    </form>

    <div>
      <h1>View Task</h1>
      <table border={2}>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Description</th>
          <th>Update/Delete</th>
        </tr>
        {taskdata.map((x)=>{
          return(
            <tr>
              <td>{x.task}</td>
              <td>{x.completed ? <span>completed</span> : <button onClick={()=>{
                handleComplete(x._id)
              }}>complete</button>}</td>
              <td>{x.description}</td>
              <td><button>update</button><button>Delete</button></td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}

export default App;
