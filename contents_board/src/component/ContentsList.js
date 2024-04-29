import './ContentsList.css';
 
 
import { Link } from 'react-router-dom';

const ContentsList =({props, title, headline})=>{
    const headline0 = props.filter((it)=>(it.headline === true));
    if(headline){
        return(
            <>
            <h2>{title}</h2>
            <ul className="contentsList">
                {headline0.map((it)=>(
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
    }else{
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
}

export default ContentsList;