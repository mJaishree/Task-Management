import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from "./Login";
import { Reg } from "./Reg";
import { Home } from "./Home";
import { Form } from "./Form";

export const Routing = ()=>{

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path="/reg" element={<Reg/>}></Route>
                    <Route path="/h" element={<Home/>}></Route>
                    <Route path="/f" element={<Form/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}