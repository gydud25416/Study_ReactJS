import { useRef } from "react";
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";


export default function CreateWord(){
    const navigate = useNavigate();

    const days = useFetch("http://localhost:3001/days")
    function onSubmit(e){
        e.preventDefault();

        console.log(engRef.current.value)
        console.log(korRef.current.value)
        console.log(dayRef.current.value)

        fetch(`http://localhost:3001/words/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                day:dayRef.current.value,
                eng:engRef.current.value,
                kor:korRef.current.value,
                isDone:false 
            })
        })
        .then(res=>{
            if(res.ok){
                navigate(`/day/${dayRef.current.value}`);
            }
        }) 
    }
    
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map((it)=>(
                        <option key={it.id} value={it.day}>{it.day}</option>
                    ))} 
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}