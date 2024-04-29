import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day =( )=>{
 
 const {day} = useParams();
 
 
    const wordList = dummy.words.filter((it)=>(it.day === Number(day)))
 
    return(
        <>
        <h2> Day {day}</h2>
        <table>
            <tbody>
                {wordList.map((it)=>(
                    <Word it={it} key={it.id}/>
                ))}
                
            </tbody>
        </table>
        </>
    )
}
export default Day;