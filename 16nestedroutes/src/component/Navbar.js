import { NavLink,Outlet } from "react-router-dom"

export default function Navbar(){
    return(<>
    <NavLink to="/" style={({isActive})=>isActive ? {color:"red"}:undefined}>Home</NavLink>
    <NavLink to="/about" style={({isActive})=>isActive ? {color:"red"}:undefined}>About</NavLink>
    <NavLink to="/contact" style={({isActive})=>isActive ? {color:"red"}:undefined}>Contact</NavLink>
    <Outlet/>
    </>)

}