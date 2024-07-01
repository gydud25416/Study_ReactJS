import {React} from "react"
import { Link } from "react-router-dom"
import './Header.css'

export default function Header({LogInCheck, LogInFunc}){ 

    function LogOut(){
        LogInFunc(false);
    }
    return(
        <header className="header" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/header_visual.jpg)' }}> 
            <h1><Link to={"/"}>Review Note</Link></h1> 
                {LogInCheck ? (
                    <ul>
                        <li><Link  to="/login" onClick={LogOut}>Log Out</Link></li>
                        <li>|</li>
                        <li><Link  to="/signup">My Page</Link></li>
                    </ul>
                    ):(
                    <ul>
                        <li><Link to="/login">Log In</Link></li>
                        <li>|</li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                 )}  
        </header>
    )
}