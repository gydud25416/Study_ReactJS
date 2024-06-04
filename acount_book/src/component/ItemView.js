 
import { useRef, useState } from 'react'
import './ItemView.css'
   
export default function ItemView({ it }){
 
    const [ item, setItem] = useState(it);
    const liRef = useRef();
  
    function onDelete(){
        if(window.confirm("정말 삭제하시겠습니까?")) {
        fetch(`http://localhost:3001/item/${item.id}`,{
            method:"DELETE", 
        })
        .then(res=>{
            if(res.ok){
                setItem({id:0});
                alert("삭제되었습니다.");
                window.location.reload();
            }
        });
    } 
    }
    if(item.id === 0){
        return null; //아무일도 일어나지 않는다.
    }
 
    return(
             <>
                <li ref={liRef}>
                    <p style={{color:it.add === "+1" ? "blue" : "red"}}>{it.add === "+1" ? "입금" : "출금"}</p>
                    <p className='day'>{it.day}</p>
                    <p>{it.content}</p>
                    <p>{it.money} 원</p>
                    <button onClick={onDelete}>X</button>
                </li> 
             </> 
    )
}