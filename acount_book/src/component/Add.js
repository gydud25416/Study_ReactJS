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

    function onlyNumber(){
        textRef.current.value = textRef.current.value.replace(/[^0-9]/, '');
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
                
                <label for={'memo'} style={{ display:"block",   fontSize:"18px" }}>메모</label>
                <input id={'memo'}  className='text2' placeholder='메모를 입력하세요.'  ref={contentRef} type='text'/>
                <select ref={plusRef} >
                    <option value={"+1"}>입금</option>
                    <option value={"-1"}>출금</option>
                </select>
                <input className='text' placeholder='금액를 입력하세요.' onChange={onlyNumber}  ref={textRef} type='text'/>
            </div>
            <div className='btn'>
                <Button  text={"등록"} onClick={onSubmit} className={"btn_add"} />
                <Button text={"취소"} onClick={onClick} className={"btn_back"} />
            </div>
        </div>
    )
}