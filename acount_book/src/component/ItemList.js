import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import './ItemList.css'
import ItemView from './ItemView'

export default function ItemList(){
    const item = useFetch('http://localhost:3001/item')
    const yearRef = useRef(null);
 
    const [yearItem, setYearItem] = useState();  
    const [ itemData, setItemData] = useState(item);
 
    function handleOnChange(){
        setYearItem(yearRef.current.value); 
    } 
    useEffect(()=>{   
        setItemData(item);  
        },[item])
 
    useEffect(()=>{  
        if(yearRef.current.value === '전체'){
            setItemData(item); 
        }else{
            setItemData(item.filter((it)=>(it.year === yearItem)));  
 
        }
    },[yearItem, item])
 
    return(
        <div className="wrap_list">
            <div className="list_header">
                <select  ref={yearRef} onChange={handleOnChange}>  
                    <option value={'전체'}>전체</option>
                    <option value={'2024'}>2024</option>
                    <option value={'2023'}>2023</option>
                    <option value={'2022'}>2022</option>
                </select>

                <ul>
                    <li className='on'>전체</li>
                    <li>입금</li>
                    <li>출금</li>
                </ul>
            </div>
            <div className='list_view'>
                {itemData.length === 0 ? (
                    <ul className="wrap_view">
                    <li style={{justifyContent:"center"}}>내역이 없습니다.</li>
                </ul>
                ):(
                    <ul className="wrap_view">
                    {itemData.map((it, idx)=>(
                        <ItemView key={idx} it={it}   />
                    ))} 
                </ul>
                )}
                
            </div>
        </div>
    )
    
}