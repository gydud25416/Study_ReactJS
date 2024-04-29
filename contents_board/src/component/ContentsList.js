import './ContentsList.css';
 
 
import { Link } from 'react-router-dom';

const ContentsList =({props, title})=>{
    
    return(
        <>
        <h2>{title}</h2>
        <ul className="contentsList">
            {props.map((it)=>(
                <li key={it.id}>
                    <Link to={`/${it.menu}/${it.id}`} props={props}>
                        <h3>{it.title} </h3>
                        <p>{it.subTitle}</p>
                    </Link> 
                </li>
            ))} 
        </ul>
        </>
    )
}

export default ContentsList;