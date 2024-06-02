import { useEffect, useState } from 'react';
import './Graph.css'

export default function Graph(){
    const [graph, setGraph] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/item')
        .then(res=>{
            return res.json();
        })
        .then(graph=>{
            setGraph(graph);
        })
    });
    console.log(graph)

    return(
        <div className="wrap_graph">
            <div className='graph_box'>
                    <div className='graph_item' style={{height:"80%"}}></div>
                    <p>2023</p>
            </div>
            <div className='graph_box'>
                    <div className='graph_item'style={{height:"20%"}}></div>
                    <p>2024</p> 
            </div>

        </div>
    )
}