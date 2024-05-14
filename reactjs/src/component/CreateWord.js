import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";


export default function CreateWord(){
    const navigate = useNavigate();
    const days = useFetch("http://localhost:3001/days");

    const [isLoading, setIsLoading] = useState(false);



        function onSubmit(e){ 
            e.preventDefault();

            if(!isLoading){ 
                setIsLoading(true);
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
                        alert("저장되었습니다.")
                        navigate(`/day/${dayRef.current.value}`);
                        setIsLoading(false);
                    }
                })  
            }
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
            <button
            style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? 'Saving...' : '저장'}</button>
        </form>
    )
}