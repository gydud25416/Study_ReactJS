import './Header.css';
import { Link } from 'react-router-dom';

const Header =()=>{

    return(
        <div className="header"> 
            <h1>
                <Link to={'/'}>
                Contents Board
                </Link>
            </h1>
        </div>
    )
}
export default Header;