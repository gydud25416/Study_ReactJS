import {React} from "react"
import { Link } from "react-router-dom"
import './Header.css'

export default function Header(){
    
    return(
        <header className="header" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/header_visual.jpg)' }}> 
            <h1><Link to={"/"}>Review Note</Link></h1>
            <ul>
                <li><Link to={"/login"}>Log In</Link></li>
                <li>|</li>
                <li><Link to={"/signup"}>Sign Up</Link></li>
            </ul>
        </header>
    )
}