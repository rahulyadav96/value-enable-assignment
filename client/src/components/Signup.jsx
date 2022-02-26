import { useState } from "react";
import { Form } from "./common/Form"
import axios from "axios"
export const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "customer"
    });

    // handle the input field
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value })
    }

    //handle form submit

    const handleSubmit = (e)=>{
        e.preventDefault();
            if(formData.password.length>=8){

                axios.post('/signup',formData)
                .then(res=>{
                    console.log(res.data);
                    alert("Signup Success");
                    
                })
                .catch(err=>{
                    console.log(err)
                })
            }
           
    }
    return <>
        <h2>Sign UP</h2>
        <Form onSubmit={handleSubmit}>
            <div style={{marginBottom:"20px"}}>
                Select your role : <select name="role" onChange={handleChange}>
                    <option value="select">Select</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                    <option value="moderator">Moderator</option>
                </select>

            </div>
            <input type="text" name="fullName" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
            {
            formData.password.length<8 &&formData.password.length>0?<p style={{color:"red", marginTop:"0", fontSize:"0.8em"}}>password should contains atleast 8 characters</p>:""
        }
            <input type="submit" value="Sign-Up" />
        </Form>
    </>
}