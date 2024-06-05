import {useState} from 'react'
export default function Word({ it }){
    const [del, setDel] = useState(it);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(it.isDone);
    
    function toggleShow(){ 
        setIsShow(!isShow); 
    }

    function toggleDone(){ 
        fetch(`http://localhost:3001/words/${it.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                ...it,
                isDone:!isDone
            })
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone); 
            }
        }) 
    }

    function onDelete(){
        if(window.confirm("정말 삭제하시겠습니까?")){ 
        fetch(`http://localhost:3001/words/${del.id}`,{
            method:"DELETE"
        })
        .then(res=>{
            if(res.ok){
                setDel({id:0});
            }
        })
        }
    }
    if(del.id === 0){
        return null;
    }


    // const [word, setWord] = useState(it);
    return (
        <tr className={ isDone ? 'off' : ''}>
            <td><input type="checkbox" checked={ isDone} onChange={toggleDone}/></td>
            <td>{it.eng}</td>
            <td>{isShow && it.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기' }</button>
                <button onClick={onDelete} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}