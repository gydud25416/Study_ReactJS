 
import './Graph.css'
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';

export default function Graph(){
    const graph = useFetch('http://localhost:3001/item');
    const [ plusFilter, setPlusFilter] = useState('+1')

    const graphTotalP = graph.filter((it)=>(it.add === "+1")).reduce((sum, graph)=> sum +  parseInt(graph.money, 10), 0)
    const graphTotalM = graph.filter((it)=>(it.add === "-1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0)

    const graph2024P = graph.filter((it)=>(it.year === "2024" && it.add === "+1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0);
    const graph2023P = graph.filter((it)=>(it.year === "2023" && it.add === "+1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0); 
    const graph2022P = graph.filter((it)=>(it.year === "2022" && it.add === "+1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0);

    const graph2024M = graph.filter((it)=>(it.year === "2024" && it.add === "-1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0);
    const graph2023M = graph.filter((it)=>(it.year === "2023" && it.add === "-1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0); 
    const graph2022M = graph.filter((it)=>(it.year === "2022" && it.add === "-1")).reduce((sum, graph)=> sum + parseInt(graph.money, 10), 0);
 
    const [toTal2024, SetToTal2024] = useState(parseInt((graph2024P/graphTotalP)*100));
    const [toTal2023, SetToTal2023] = useState(parseInt((graph2023P/graphTotalP)*100));
    const [toTal2022, SetToTal2022] = useState(parseInt((graph2022P/graphTotalP)*100));

    useEffect(()=>{
        SetToTal2024(parseInt((graph2024P/graphTotalP)*100))
        SetToTal2023(parseInt((graph2023P/graphTotalP)*100))
        SetToTal2022(parseInt((graph2022P/graphTotalP)*100)) 
    },[graph2024P, graph2023P, graph2022P, graphTotalP])

    function itemPlus(){
        setPlusFilter("+1");
        SetToTal2024(parseInt((graph2024P/graphTotalP)*100))
        SetToTal2023(parseInt((graph2023P/graphTotalP)*100))
        SetToTal2022(parseInt((graph2022P/graphTotalP)*100))
        
    } 
    function itemMinus(){
        setPlusFilter("-1");
        SetToTal2024(parseInt((graph2024M/graphTotalM)*100))
        SetToTal2023(parseInt((graph2023M/graphTotalM)*100))
        SetToTal2022(parseInt((graph2022M/graphTotalM)*100))
    }
    // console.log(toTal2024)
    return(
        <>
        <ul className='plusFilter graph'>
                     
                    <li className={plusFilter === "+1" ? "on" : ''} onClick={itemPlus}>수입</li>
                    <li className={plusFilter === "-1" ? "on" : ''} onClick={itemMinus}>지출</li>
                </ul>
        <div className="wrap_graph">
        <div className='graph_box'>
                    <div className='graph_item ' style={{height: toTal2022 + "%"}}></div>
                    <p>2022</p>
            </div>
            <div className='graph_box'>
                    <div className='graph_item ' style={{height: toTal2023 + "%"}}></div>
                    <p>2023</p>
            </div>
            <div className='graph_box'>
                    <div className='graph_item'style={{height: toTal2024 + "%"}}></div>
                    <p>2024</p> 
            </div>

        </div>
        </>
    )
}