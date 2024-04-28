import dummy from "../db/data.json"
import { useParams } from "react-router-dom";

const Day =( )=>{
 
 const {day} = useParams();
 
 
    const wordList = dummy.words.filter((it)=>(it.day === Number(day)))
 
    return(
        <>
        <h2> Day {day}</h2>
        <table>
            <tbody>
                {wordList.map((it)=>(
                    <tr key={it.id}>
                        <td>{it.eng}</td>
                        <td>{it.kor}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </>
    )
}
export default Day;