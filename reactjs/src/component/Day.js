 
import { useParams, useNavigate } from "react-router-dom";
import Word from "./Word"; 
import useFetch from "../hooks/useFetch";

const Day =( )=>{
 
 const {day} = useParams();

 const navigate = useNavigate();
 const words = useFetch(`http://localhost:3001/words?day=${day}`)
 const days = useFetch(`http://localhost:3001/days`)

    const dayLength = days.length;

 

    if(words.length === 0){
        return<span>Loading...</span>
    }

    function goNext(){
        if(day == dayLength){
            alert("다음 일차가 없습니다.")
            return false;
        }
 
        navigate(`/day/${Number(day) + 1}`);
    }
    function goPrev(){
        if(day == 1){
            alert("이전 일차가 없습니다.")
            return false;
        }
        navigate(`/day/${day - 1}`)
    }

    return(
        <>
        <h2> Day {day}</h2>
        <table>
            <tbody>
                {words.map((it)=>(
                    <Word it={it} key={it.id}/>
                ))}
                
            </tbody>
        </table>
        <button onClick={goPrev} style={{
            margin:"15px 15px 0 0",
            display: day == 1 ? 'none' : 'inline-block',
            }}>이전</button>
        <button onClick={goNext} style={{
            margin:"15px 15px 0 0",
            display: day == dayLength ? 'none' : 'inline-block',
            }} >다음</button>
        </>
    )
}
export default Day;