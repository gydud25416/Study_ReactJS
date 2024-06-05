import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import './ItemList.css'
import ItemView from './ItemView'

export default function ItemList(){
    const item = useFetch('http://localhost:3001/item')
    const yearRef = useRef(null);
    const searchRef = useRef(null);
 
    const [yearItem, setYearItem] = useState();  
    const [ itemData, setItemData] = useState(item);
    const [ plusFilter, setPlusFilter] = useState("all");
    const [search, setSearch] = useState('');
 
 
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

    function itemAll(){ //전체 필터
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

    function handleOnChangeSearch(e){
         setSearch(e.target.value); 
    }

    useEffect(()=>{
        if(yearRef.current.value === '전체'){
            if(plusFilter === "all"){
                setItemData(  
                    search === ''  ? item : item.filter((it)=>( it.content.includes(search))) 
                )
            }
            if(plusFilter === "+1"){
                setItemData(  
                    search === ''  ? item.filter((it)=>( it.add === "+1")) : item.filter((it)=>( it.add === "+1" && it.content.includes(search))) 
                )
            }
            if(plusFilter === "-1"){
                setItemData(  
                    search === ''  ? item.filter((it)=>( it.add === "-1")) : item.filter((it)=>( it.add === "-1" && it.content.includes(search))) 
                )
            }
        }else{
            if(plusFilter === "all"){
                setItemData(  
                    search === ''  ? item.filter((it)=>( it.year === yearItem)) : item.filter((it)=>(it.year === yearItem  && it.content.includes(search))) 
                )
            }
            if(plusFilter === "+1"){
                setItemData(  
                    search === ''  ? item.filter((it)=>( it.year === yearItem && it.add === "+1")) : item.filter((it)=>(it.year === yearItem && it.add === "+1" && it.content.includes(search))) 
                )
            }
            if(plusFilter === "-1"){
                setItemData(  
                    search === ''  ? item.filter((it)=>( it.year === yearItem && it.add === "-1")) : item.filter((it)=>(it.year === yearItem && it.add === "-1" && it.content.includes(search))) 
                )
            }
        }
        
    },[search, plusFilter, yearItem, item]);


    return(
        <div className="wrap_list">
            <div className="list_header">
                <select  ref={yearRef} onChange={handleOnChange}>  
                    <option value={'전체'}>전체</option>
                    <option value={'2024'}>2024</option>
                    <option value={'2023'}>2023</option>
                    <option value={'2022'}>2022</option>
                </select>
                <input type='text' value={search} className='ItemSearch' placeholder='검색어를 입력하세요' ref={searchRef} onChange={handleOnChangeSearch} />
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