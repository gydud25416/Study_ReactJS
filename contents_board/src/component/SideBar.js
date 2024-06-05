import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = ()=>{

    return(
        <div className="sidebar">
            <ul>
                <li><Link to={'/animals/'}>Animals</Link></li>
                <li><Link to={'/foods/'}>Foods</Link></li>
            </ul>
            
         
        </div>
    )
}

export default SideBar;