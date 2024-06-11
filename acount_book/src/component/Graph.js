 
import './Graph.css'
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';

export default function Graph(){
    const graph = useFetch('https://midnight-cumbersome-cashew.glitch.me/item');
    const [ plusFilter, setPlusFilter] = useState('+1');
    const [yearFilter, setYearFilter] = useState({'2024':0, '2023':0, '2022':0});
   
    useEffect(()=>{ //초기 계산 함수 불러오기
        graphYear(); 
    },[plusFilter, graph]) 
    function PlusFilter(t){
        setPlusFilter(t);
    } 
    function graphYear(){ //년도별 퍼센트 계산
        const graphTotal = graph.filter((it)=>(it.add === plusFilter)).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0);

        const years = [2024, 2023, 2022].map((year)=>(
            graph.filter((it)=>(it.year === String(year) && it.add=== plusFilter )).reduce((sum, graph)=> sum + parseInt(graph.money, 10 ), 0) 
        ))  
        setYearFilter({
            '2024': parseInt((years[0]/graphTotal)*100),
            '2023': parseInt((years[1]/graphTotal)*100),
            '2022': parseInt((years[2]/graphTotal)*100), 
        }) 
    } 
    return(
        <>
        <ul className='plusFilter graph'>
                     
                    <li className={plusFilter === "+1" ? "on" : ''} onClick={()=>PlusFilter("+1")}>수입</li>
                    <li className={plusFilter === "-1" ? "on" : ''} onClick={()=>PlusFilter("-1")}>지출</li>
                </ul>
        <div className="wrap_graph">
            {[2022, 2023, 2024].map((year)=>(
                <div className='graph_box' key={year}>
                    <div className='graph_item ' style={{height: yearFilter[year] + "%"}}></div>
                    <p>{year}</p>
                 </div>
            ))} 
        </div>
        </>
    )
}