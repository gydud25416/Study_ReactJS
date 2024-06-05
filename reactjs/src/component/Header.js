import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className="header">
            <h1>
                <Link to="/">토익 영단어(초급)</Link>
            </h1>
            <div className="menu">
                <Link to={'/create_word'} className="link">
                    단어 추가
                </Link>
                <Link to={'/create_day'} href="#x" className="link">
                    Day 추가
                </Link>
            </div>
            
        </div>
    )
}
export default Header;