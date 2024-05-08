
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";

export default function CreateDay(){
    const navigate = useNavigate();
    const days = useFetch("http://localhost:3001/days/")
    function addDay(){
        fetch("http://localhost:3001/days/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                id:days.length + 1,
                day : days.length + 1,
            })
        })
        .then(res=>{
            if(res.ok){
                navigate('/')
            }
        })
    }
 

    return(
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}