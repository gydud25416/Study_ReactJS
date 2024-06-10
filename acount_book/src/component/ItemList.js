import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import './ItemList.css'
import ItemView from './ItemView'

export default function ItemList(){
    const item = useFetch('http://localhost:3001/item')
    const yearRef = useRef(null);
    const searchRef = useRef(null);
 
    const [yearItem, setYearItem] = useState('전체');  
    const [ itemData, setItemData] = useState(item);
    const [ plusFilter, setPlusFilter] = useState("all");
    const [search, setSearch] = useState('');
 
 
    function handleOnChange(){ //연도 이동
        setYearItem(yearRef.current.value); 
        setPlusFilter("all");
    }  
    function itemPlus(t){ //입금 필터 
        setPlusFilter(t); 
    }

    function handleOnChangeSearch(e){ //검색
        setSearch(e.target.value); 
   }

   useEffect(()=>{ //초기 데이터 불러오기
    setItemData(item)
   },[item]);

    useEffect(()=>{  //내역 필터링
        let result = item ;

        if(yearRef.current.value !== '전체'){
            result = result.filter((it)=>(it.year === yearItem )); 
        }

        if(plusFilter !== "all"){
            result = result.filter((it)=>(it.add === plusFilter ));
        }

        if(search){
            result = result.filter((it)=>( it.content.includes(search)));
        } 
        
        setItemData(result);

    },[yearItem, item, plusFilter, search]);
   
  
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
                    <li className={plusFilter === "all" ? "on" : ''} onClick={()=>itemPlus("all")}>전체</li>
                    <li className={plusFilter === "+1" ? "on" : ''} onClick={()=>itemPlus("+1")}>입금</li>
                    <li className={plusFilter === "-1" ? "on" : ''} onClick={()=>itemPlus("-1")}>출금</li>
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
