import {useState} from 'react'
export default function Word({ it }){

    function toggleShow(){ 
        setIsShow(!isShow); 
    }

    function toggleDone(){ 
        setIsDone(!isDone); 
    }

    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(it.isDone);
    return (
        <tr className={ isDone ? 'off' : ''}>
            <td><input type="checkbox" checked={ isDone} onChange={toggleDone}/></td>
            <td>{it.eng}</td>
            <td>{isShow && it.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기' }</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}