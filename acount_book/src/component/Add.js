import { useState, useRef } from 'react';
import './Add.css'
import Button from './Button'
import './Button.css'
import getFormattedDate  from './util.js'

export default function Add({btn, onClick}){
    const dateRef = useRef(null);
    const plusRef = useRef(null);
    const textRef = useRef(null);
    const contentRef = useRef(null);

    const [state, setState] = useState({
        date : getFormattedDate(new Date())
    }); 

    function handleChangeDate(e){
        setState(e.target.value);
    } 
 
    function onSubmit(e){
        e.preventDefault();
        if(window.confirm("등록하시겠습니까?")){

        fetch('http://localhost:3001/item',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                money: textRef.current.value ,
                year: dateRef.current.value.split('-')[0], 
                day: dateRef.current.value,
                content: contentRef.current.value,
                add:plusRef.current.value
            })
        })
        .then(res=>{
            if(res.ok){ 
                alert("등록하였습니다.");
                window.location.reload();
        }
        })
    }
} 
    return(
        <div className="wrap_add main_wrap" style={{display:!btn ? "none":"block"}}>
            <h2>내역 추가하기</h2>
            <input className='date' ref={dateRef} type='date'   value={state.date}  onChange={handleChangeDate} />
            <div>
                <select ref={plusRef} >
                    <option value={"+1"}>입금</option>
                    <option value={"-1"}>출금</option>
                </select>
                <input className='text' ref={textRef} type='text'/>
                <label style={{ display:"block",   marginTop:"30px", fontSize:"18px" }}>메모</label>
                <input className='text2'  ref={contentRef} type='text'/>
            </div>
            <div className='btn'>
                <Button  text={"등록"} onClick={onSubmit} className={"btn_add"} />
                <Button text={"취소"} onClick={onClick} className={"btn_back"} />
            </div>
        </div>
    )
}