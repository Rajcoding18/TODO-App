import React from 'react'
import './Signup.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'
import HeadingComp from './HeadingComp'

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value })
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/v1/signin`, inputs);
            sessionStorage.setItem("id", response.data.user._id);
            dispatch(authActions.login());
            
            navigate("/todo");
            
        } catch (error) {
            console.error("Sign in failed:", error);
        }
    };

    return (
        <div>
            <div className='signup'>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-left column d-lg-flex d-none justify-content-center align-items-center">
                            <HeadingComp first="Sign" second="Up" />
                        </div>
                        <div className="col-lg-8 d-flex justify-content-center align-items-center">

                            <div className='d-flex flex-column w-100 p-3'>

                                <input className='p-2 my-3 input-signup'
                                    type="email"
                                    name='email'
                                    placeholder='Enter your Email'
                                    value={inputs.email}
                                    onChange={change} />

                                <input className='p-2 my-3 input-signup'
                                    type="password"
                                    name='password'
                                    placeholder='Enter your Password'
                                    value={inputs.password}
                                    onChange={change} />

                                <button className='btn-signup p-2' onClick={submit}>Sign In</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
