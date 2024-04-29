import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import './ContentView.css';

const ContentView = ()=>{
    const { item } = useParams();
    const num = dummy.contents.filter((it)=>(it.id === Number(item)))

 
    return(
        <div className="contentView">
            {num.map((it)=>(
                <div>
                    <h3>{it.title}</h3>
                    <p>{it.content}</p>
                </div>
            ))}
            
        </div>
    )
}

export default ContentView;