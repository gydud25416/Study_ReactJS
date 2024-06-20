import './ContentsList.css';
 
 
import { Link } from 'react-router-dom';

const ContentsList =({props, title, headline})=>{
    const headline0 = props.filter((it)=>(it.headline === true));
    if(headline){
        return(
            <> 
            <ul className="contentsList">
                {headline0.map((it)=>(
                    <li key={it.id}>
                        <Link to={`/${it.menu}/${it.id}`} props={props}>
                         
                            <div style={{backgroundImage:`url(` + process.env.PUBLIC_URL + `/contentsboard/assets/img_${it.id}.jpg)`  }}></div>
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
        <h1>{title}</h1>
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