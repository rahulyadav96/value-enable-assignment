import { useContext, useState } from "react"
import {Form} from "./common/Form"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import { Redirect } from "react-router-dom"
export const Login = ()=>{

    const {auth,setAuth} = useContext(AuthContext);

    const [details,setDeatils] = useState({
        email:"",
        password:""
    })
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setDeatils({...details,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(details.password.length>=8){

            axios.post('/login',details)
            .then(res=>{
                console.log(res.data);
                setAuth(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

    return <>
    <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
        {
            details.password.length<8 &&details.password.length>0?<p style={{color:"red", marginTop:"0", fontSize:"0.8em"}}>password should contains atleast 8 characters</p>:""
        }
        <input type="submit" value="Submit" />
      </Form>
    </>
}