import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateArr } from "./Store/Slice";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";



export const Home = () => {
    
    let nav = useNavigate()
    let dis = useDispatch()
    
    const state = useSelector((jai)=>jai.data)
    console.log(state)

    const edit = (index) => {
        console.log("edit");
        nav(`/f?id=${index}`);
    };

    const del = (i)=>{
        console.log("del")
        let a = state.arr.filter((v,index)=>{
            return i === index ? "": v
        })
        dis(updateArr(a))
       
    }

    return (


        <div className="container mt-5">
    <div className="card">
        <div className="card-header" style={{ background: "#E1C16E", color: "#A52A2A" }}>
            <h1 className="text-center h4">Details</h1>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col" className="h6">Task</th>
                            <th scope="col" className="h6">Description</th>
                            <th scope="col" className="h6">Status</th>
                            <th scope="col" className="h6">Time</th>
                            <th scope="col" className="h6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.arr.map((v, i) => (
                            <tr key={i}>
                                <td className="small">{v.name}</td>
                                <td className="small">{v.description}</td>
                                <td className="small">{v.status}</td>
                                <td className="small" style={{fontSize:"12px"}}>{new Date(v.submittedTime).toLocaleString()}</td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => del(i)}><AiTwotoneDelete /></button>
                                        <button type="button" className="btn btn-primary btn-sm" onClick={() => edit(i)}><MdEdit /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div style={{ marginTop: "20px" }}>
        <Link to='/f'><button type="button" className="btn btn-primary btn-sm">Add task</button></Link>
    </div>
</div>

        
        
    );
};

