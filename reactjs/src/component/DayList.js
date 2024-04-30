  import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'

const DayList = ()=>{
    const [days, setDays] = useState([]);

    useEffect(()=>{
       
    },[])
    
    return(
        <>
        <ul className='list_day'>
            {days.map((day) =>(
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                   
                  
                </li>
            ))}
            <li> </li>
        </ul>
 
        </>
    )
}
export default DayList;