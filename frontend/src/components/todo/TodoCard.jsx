import React from 'react'
import './todo.css'
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = ({ title, body, id, delid, dis, updateId, toBeUpdate}) => {
    return (
        <div className='p-3 todo-card'>
            <div>
                <h5 className='d-flex justify-content-start'>{title}</h5>
                <hr />
                <p className='todo-card-p d-flex justify-content-start'>{body.split("", 100)}...</p>
            </div>

            <div className='d-flex  justify-content-around '>
                <div className='d-flex card-icon-head px-2 py-1' onClick={() => {
                    dis('block');
                    toBeUpdate(updateId);
                    }}> 
                    <GrDocumentUpdate/>Update
                 </div>
                <div className='del d-flex card-icon-head px-2 py-1' onClick={()=>{delid(id)
                }}> 
                    <MdDelete />Delete 
                </div>
            </div>

        </div>
    )
}

export default TodoCard