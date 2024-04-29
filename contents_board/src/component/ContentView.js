import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './ContentView.css';

 

const ContentView = ({props})=>{
    const { item } = useParams(); 
    const num = props.filter((it)=>(it.id === Number(item)))
    const navigate = useNavigate();
    function goback(){
        navigate(-1);
    }
 
    return(
        <div className="contentView">
            {num.map((it)=>(
                <div>
                    <button onClick={goback}>뒤로가기</button>
                    <h3>{it.title}</h3>
                    <p>{it.content}</p>

                </div>
            ))}
            
        </div>
    )
}

export default ContentView;