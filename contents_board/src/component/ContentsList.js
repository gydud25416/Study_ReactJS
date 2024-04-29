import './ContentsList.css';
 
import dummy from '../db/data.json'
import { Link } from 'react-router-dom';

const ContentsList =()=>{

    return(
        <ul className="contentsList">
            {dummy.contents.map((it)=>(
                <li key={it.id}>
                    <Link to={`/item/${it.id}`}>
                        <h3>{it.title} </h3>
                        <p>{it.subTitle}</p>
                    </Link> 
                </li>
            ))}
           
           
            
        </ul>
    )
}

export default ContentsList;