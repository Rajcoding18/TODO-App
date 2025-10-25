import React, { useState } from 'react'
import axios from 'axios';
import { useEffect} from 'react';
import { toast } from 'react-toastify';

const TodoUpdate = ({display, update, refresh}) => {
  useEffect(() => {
    setInputs({
      title: update.title, 
      body: update.body
    })
  }, [update])
  
  const [Inputs, setInputs] = useState({title:"", body:""});

  const change = (e) => {
    const {name, value} = e.target;
    setInputs({...Inputs, [name]: value});
  }
  const submit = async () => {
     await axios.put(`/api/v2/updateTask/${update._id}`, Inputs).then((res) => {
      toast.success("Your Task has Updated sucessfully") 
    });
    display("none");
    refresh();
  }
  return (
    <div className='p-5 f-flex justify-content-center align-items-start flex-column update'>
        <h3>Update Your Task</h3>
        <input type="text" className='todo-inputs my-4 w-100 p-3'name='title' value={Inputs.title} onChange={change}/>
        <textarea className='todo-inputs w-100 p-3' name='body' value={Inputs.body} onChange={change}/>
        
        <div>
            <button className="btn btn-dark my-4" onClick={submit}>Update</button>
            <button className="btn btn-danger mx-3 my-4"onClick={()=>{
              display('none')
            }} >Close</button>
        </div>
    </div>
  )
}

export default TodoUpdate