 
import './ItemView.css'
   
export default function ItemView({ it, DelData }){
  
    function onDelete(){
        if(window.confirm("정말 삭제하시겠습니까?")) {
        fetch(`https://midnight-cumbersome-cashew.glitch.me/item/${it.id}`,{
            method:"DELETE", 
        })
        .then(res=>{
            if(res.ok){ 
                alert("삭제되었습니다."); 
                DelData(it);
            }
        });
    } 
    } 
        return(
                <>
                    <li className='abc'>
                        <p style={{color:it.add === "+1" ? "blue" : "red"}}>{it.add === "+1" ? "입금" : "출금"}</p>
                        <p className='day'>{it.day}</p>
                        <p>{it.content}</p>
                        <p>{it.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</p>
                        <button onClick={onDelete}>X</button>
                    </li> 
                </> 
        )
    }

 