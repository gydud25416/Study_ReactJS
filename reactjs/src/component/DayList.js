  import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'

const DayList = ()=>{
    const [days, setDays] = useState([]);

    useEffect(()=>{
       fetch('http://localhost:3001/days')
       .then(res=>{ //res는 실제 json이 아닌 HTTP응답으로, json()를 사용해야 json으로 변환되고 Promise를 반환한다.
            return res.json();
       })
              .then(data=>{
			        setDays(data)
       })
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