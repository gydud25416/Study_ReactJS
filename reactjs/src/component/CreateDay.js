
import { useState } from "react";
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";

export default function CreateDay(){
    const navigate = useNavigate();
    const days = useFetch("http://localhost:3001/days/")
    const words = useFetch("http://localhost:3001/words")
    const [del, setDel] = useState(days)
    function addDay(){
        fetch("http://localhost:3001/days/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                id: `${days.length + 1}`,
                day : days.length + 1,
            })
        })
        .then(res=>{
            if(res.ok){
                navigate('/')
            }
        })
    }
    console.log(days.length)
    function delDay(){
        if(window.confirm("해당 일차의 단어가 모두 삭제됩니다.")){
            fetch(`http://localhost:3001/days/${days.length}`,{
                method:"DELETE"
            })
            .then(res=>{
                if(res.ok){
                    alert("삭제되었습니다.");
                    setDel({id:0})
                }
            }) 
        }
       
    }
    if(del.id === 0){
        return navigate('/');
    }
    
    return(
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
            <button onClick={delDay} className="btn_del">Day 삭제</button>
        </div>
    )
}