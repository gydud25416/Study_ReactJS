import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import './ItemList.css'
import ItemView from './ItemView'

export default function ItemList(){
    const item = useFetch('http://localhost:3001/item')
    const yearRef = useRef(null);
 
    const [yearItem, setYearItem] = useState();  
    const [ itemData, setItemData] = useState(item);
    const [ plusFilter, setPlusFilter] = useState('all')
 
 
    function handleOnChange(){
        setYearItem(yearRef.current.value); 
        setPlusFilter("all");
    } 
    useEffect(()=>{   //초기 데이터 불러오기
        setItemData(item);  
        },[item])
 
    useEffect(()=>{  //연도 필터
        if(yearRef.current.value === '전체'){
            setItemData(item); 
        }else{
            setItemData(item.filter((it)=>(it.year === yearItem)));   
        }
    },[yearItem, item]);

    function itemAll(){ //입금 출금 전체 필터
        if(yearRef.current.value === '전체'){
            setItemData(item); 
        }else{
            setItemData(item.filter((it)=>(it.year === yearItem)));   
        }
        setPlusFilter("all");
    }; 
    function itemPlus(){ //입금 필터
        if(yearRef.current.value === '전체'){
            setItemData(item.filter((it)=>(it.add === "+1"))); 
        }else{
            setItemData(item.filter((it)=>(it.add === "+1" && it.year === yearItem)));  
        } 
        setPlusFilter("+1");
    }
    function itemMinus(){ //출금 필터
        if(yearRef.current.value === '전체'){
            setItemData(item.filter((it)=>(it.add === "-1"))); 
        }else{
            setItemData(item.filter((it)=>(it.add === "-1" && it.year === yearItem)));  
        }  
        setPlusFilter("-1");
    }

    return(
        <div className="wrap_list">
            <div className="list_header">
                <select  ref={yearRef} onChange={handleOnChange}>  
                    <option value={'전체'}>전체</option>
                    <option value={'2024'}>2024</option>
                    <option value={'2023'}>2023</option>
                    <option value={'2022'}>2022</option>
                </select>

                <ul className='plusFilter'>
                    <li className={plusFilter === "all" ? "on" : ''} onClick={itemAll}>전체</li>
                    <li className={plusFilter === "+1" ? "on" : ''} onClick={itemPlus}>입금</li>
                    <li className={plusFilter === "-1" ? "on" : ''} onClick={itemMinus}>출금</li>
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