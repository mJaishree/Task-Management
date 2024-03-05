import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Reg = ()=>{

    const[name,setName]=useState('')
    const[pwd,setPwd] =useState('')
    let nav = useNavigate()

    const register = (e)=>{

        console.log("register")
        e.preventDefault()
        //storing name and password in localstorage
        localStorage.setItem('username',name)
        localStorage.setItem('pwd',pwd)
        //after storing it should go to login page (after clicking register button)
        nav('/')

        
    }

    const handleName = (e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setName(e.target.value)

    }

    const handlepwd=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setPwd(e.target.value)
    }

    return(
        <div>
             <div className="container mt-5">
                <h2 className="text-center mb-4" style={{color: "#A52A2A"}}>Register</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">New User Name</label>
                        <input type="text" className="form-control"  onChange={handleName}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" onChange={handlepwd}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone number</label>
                        <input type="number" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    

                    <div className="mb-3 text-center">
                        <button onClick={register}  className="btn btn-primary">Register</button>
                    </div>
                </form>
           </div>


        </div>

        
    )
}