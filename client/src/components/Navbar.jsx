import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
const NavbarWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
box-sizing:border-box;;
width:100%;
min-height:50px;
padding:10px 20px;
color:white;
background-color:blue;
font-size:16px;
.nav-link{
    color:inherit;
    font-size:1.5em;
    text-decoration:none;
    &:hover {
        color:navy;
    }
}
.right-nav, .user{
    flex:0.5;
    display:flex;
    font-size:0.6em;
    font-weight:600;
    justify-content:right;
    align-items:center;
    gap:20px;

}
.user > span{
    font-size:2em;
}
`
export const Navbar = ()=>{
    const {auth,setAuth}  = useContext(AuthContext)
    return <>
    <NavbarWrapper>
        <div className="left-nav">
            <Link to="/" className="nav-link">Home</Link>
        </div>
        {
            auth.token!=""?<div className="user">
               <span>Welcome {auth.user.fullName}</span> 
                <button onClick={()=>setAuth({...auth, token:"", user:""})}>Logout</button>
            </div>:
        <div className="right-nav">
            <Link to="/log-in" className="nav-link">Log-in</Link>
            <Link to="/sign-up" className="nav-link">Sign-up</Link>
        </div>
        }
    </NavbarWrapper>
    
    </>
}