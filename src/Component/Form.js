
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate,useSearchParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { updateArr, updateAuth } from "./Store/Slice";
export const Form =()=>{

    const [task,setTask] = useState("");
    const [des,setDes] = useState("");
    const [status,setStatus] = useState("");
    const[fill,setFill] = useState(false);
    const state = useSelector((r)=>r.data)
    
    let nav=useNavigate()
     let dis = useDispatch()
    
     let[param]=useSearchParams();
     let y = Number(param.get('id'));
     console.log(y)
   
       useEffect(()=>{
        if(param.get('id')!==null){
           let b = state.arr.find((v,i)=>{
            return y === i 
           })
           
           setTask(b.name)
           setDes(b.description)
           setStatus(b.status)
        }
        else{
            dis(updateArr(state.arr))
            setTask("")
            setDes("")
            setStatus("")
        }
       },[state,y])

   
 
    const submit = (e)=>{
        e.preventDefault()
        if(task==="" || des==="" || status===""){
            console.log("bye")
          setFill(true)
          alert("fill all the field")
        }
        else if (param.get('id')!==null){
            const display = {
                name: task,
                description:des,
                status: status , 
                submittedTime: new Date()
        }
           const checkEdit=state.arr.map((v,i)=>{
            return y === i ? display : v
        })
        dis(updateArr(checkEdit))
        nav('/h')
        }
        else{
        const display = {
            name: task,
            description:des,
            status: status , 
            submittedTime: new Date(),
            
    }
    dis(updateArr([...state.arr,display]))
    setTask("")
    setDes("")
    setStatus("") 
    nav('/h')
 }
    }
    
    const handleTask = (e)=>{
          e.preventDefault()
          if(e.target.name==="tname"){
            setTask(e.target.value)
        }
        else if(e.target.name==="dname"){
            setDes(e.target.value)
        }
    }
    return (
        <div> 
                
            <form>
                <>
                    <h1 style={{width:'100%',padding : "20px",background : "#E1C16E",color : "#A52A2A"}}>Add New Task</h1>
                </>

                

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={{color : "#A52A2A"}}>Task Details</h5>

                    <div className="mb-3">
                        <label className="form-label">Task Name</label>
                        <input className="form-control" type="text" value={task} name="tname" onChange={handleTask} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="taskDescription" className="form-label">Task Description</label>
                        <input id="taskDescription" className="form-control" type="text" value={des} name="dname" onChange={handleTask} placeholder="Task Description"/>
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" checked={status === "Completed"} onChange={() => setStatus("Completed")} />
                            <label className="form-check-label">Completed</label>
                        </div>

                        <div className="form-check">
                            <input  className="form-check-input" type="radio" checked={status === "not-Completed"} onChange={() => setStatus("not-Completed")} />
                            <label  className="form-check-label">Not Completed</label>
                        </div>
                    </div>

                    <button onClick={submit} type="button" className="btn btn-success">Add New task</button>
                </div>
            </div>
        </div>
            </form>
        </div>
    )
}