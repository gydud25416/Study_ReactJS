import './Header.css';
import { Link } from 'react-router-dom';

const Header =()=>{

    return(
        <header className="header" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/contentsboard/assets/header_visual.jpg)' }}> 
            <h1>
                <Link to={'/'}>
                On-Line Content Board
                </Link>
            </h1>
            <ul>
            <li><Link to={'/'}><span>Home</span></Link></li>
            <li><Link to={'/animals/'}><span>Animals</span></Link></li>
            <li><Link to={'/foods/'}><span>Foods</span></Link></li>
            </ul>
        </header>
    )
}
export default Header;