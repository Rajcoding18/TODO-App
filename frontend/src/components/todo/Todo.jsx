import React, { useEffect } from 'react'
import './todo.css'
import { useState } from 'react'
import TodoCard from './TodoCard';
import { ToastContainer, toast } from 'react-toastify';
import TodoUpdate from './TodoUpdate';
import axios from 'axios';

const Todo = () => {
    const id = sessionStorage.getItem("id");
    const [toUpdateArray, setToUpdateArray] = useState({});
    const [inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([]);

    const show = () => {
        document.getElementById('textarea').style.display = 'block';
    }

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const submit = async () => {

        const title = inputs.title;
        const body = inputs.body;
        console.log(id);

        if (inputs.title === "" || inputs.body === "") {
            toast.error("Please fill both the fields");
        }
        else {

            if (id) {
                await axios.post(`/api/v2/addTask`, {
                    title, body, id
                }).then((response) => {
                    console.log(response);

                });
                setInputs({ title: "", body: "" });
                toast.success("Task Added Successfully");
            }
            else {
                setArray([...Array, inputs]);
                setInputs({ title: "", body: "" });
                toast.success("Task Added Successfully");
                toast.warn("Task is added but not save your task!");
            }

        }

    }
    const del = async (cardid) => {
        if (id) {
            await axios.delete(`/api/v2/deleteTask/${cardid}`,
                {
                    data: { id: id },
                })
                .then(() => {
                    toast.success("Task Deleted Successfully");
                });
        } else {
            toast.warn("Please Signup first!");
        }
    }

    const update = (index) => {
        setToUpdateArray(Array[index]); // this will trigger re-render
    };

    const dis = (value) => {
        document.getElementById('todo-update').style.display = value;
    }

const fetchTasks = async () => {
  if (id) {
    await axios.get(`/api/v2/getTasks/${id}`)
      .then((response) => {
        setArray(response.data.list);
      });
  }
};

useEffect(() => {
  fetchTasks();
}, [id]);

    return (
        <>
            <div className='todo'>
                <ToastContainer />
                <div className="todo-main mt-4 container d-flex justify-content-center align-items-center flex-column">
                    <div className="todo-inputs-div d-flex flex-column p-2 w-100">

                        <input type="text"
                            placeholder='TITLE'
                            className='my-2 p-2 todo-inputs'
                            onClick={show}
                            name='title'
                            value={inputs.title}
                            onChange={change} />

                        <textarea id='textarea'
                            type="text"
                            placeholder='Body'
                            className='p-2 todo-inputs'
                            name='body'
                            value={inputs.body}
                            onChange={change}>
                        </textarea>

                    </div>
                    <div className="w-lg-50 w-100 d-flex justify-content-end my-3">
                        <button className="home-btn px-2 py-1" onClick={submit}>ADD</button>
                    </div>

                </div>

                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">

                            {Array && Array.map((item, index) => (
                                <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2" key={index}>
                                    <TodoCard title={item.title}
                                        body={item.body}
                                        id={item._id}
                                        delid={del}
                                        dis={dis}
                                        updateId={index}
                                        toBeUpdate={update} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="todo-update bg-secondary" id='todo-update'>
                <div className="container">
                    <TodoUpdate display={dis} update={toUpdateArray} refresh={fetchTasks}/>
                </div>

            </div>
        </>
    )
}

export default Todo;