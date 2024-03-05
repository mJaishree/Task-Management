import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAuth } from './Store/Slice';
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = ()=>{

    const[name,setName] = useState('')
    const[pwd,setPwd] = useState('')
   
    let dis = useDispatch()
    let nav = useNavigate()

    

    const submit = (e)=>{
        console.log("hi")
        e.preventDefault()

       let sname =  localStorage.getItem('username')
       let spwd =  localStorage.getItem('pwd')

        if(sname === name && spwd === pwd)
        {
            dis(updateAuth(true))
            nav('/f')
        }
        else{
            alert("invalid user name or password!!!")
        }
    }

    

    const handleName = (e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handlePwd = (e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setPwd(e.target.value)
    }
    return (
        <div>      
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4">LOGIN</h2>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">User Name</label>
                                        <input type="text" className="form-control" onChange={handleName} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" onChange={handlePwd} />
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={submit}>Login</button>
                                    </div>
                                </form>
                            </div>

                            <div className="card-footer bg-transparent border-top-0">
                                <div className="d-flex justify-content-center">
                                    <Link to="/reg" className="btn btn-link">Create New Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}