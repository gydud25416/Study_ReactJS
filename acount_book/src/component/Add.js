import { useState, useRef } from 'react';
import './Add.css'
import Button from './Button'
import './Button.css'
import getFormattedDate  from './util.js'
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';

export default function Add({  FilterData, AddData}){
    const dateRef = useRef(null);
    const plusRef = useRef(null);
    const textRef = useRef(null);
    const contentRef = useRef(null);
    const navigate = useNavigate();
    
    function dataInput(){
        if (dateRef.current.showPicker) {
            dateRef.current.showPicker();
          } else {
            // For older browsers, enable readOnly temporarily to show the calendar
            dateRef.current.readOnly = false;
            dateRef.current.focus();
            dateRef.current.readOnly = true;
          } 
          
    }
   

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
        const contentTest = /[^0-9]/
        if(contentRef.current.value === ''){
            alert("메모를 입력해주세요.")
            contentRef.current.focus();
            e.preventDefault();
            return;
        }
        if(textRef.current.value === ''){
            alert("금액을 입력해주세요.")
            textRef.current.focus();
            e.preventDefault();
            return;
        }
        if(textRef.current.value.match(contentTest)){
            alert("금액은 숫자만 입력해주세요.");
            textRef.current.value = "";
            textRef.current.focus();
            e.preventDefault();
            return;
        }

        e.preventDefault();
        if(window.confirm("등록하시겠습니까?")){
            const newItem = {
                money: textRef.current.value ,
                year: dateRef.current.value.split('-')[0], 
                day: dateRef.current.value,
                content: contentRef.current.value,
                add:plusRef.current.value
            };
        fetch('https://midnight-cumbersome-cashew.glitch.me/item',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newItem)
        }) 
        .then(res=> res.json())
        .then(data=>{
            if(data){ 
                alert("등록하였습니다."); 
                navigate('/', {replace:true})
                AddData(data);
                FilterData({yearItem:"전체", plusFilter:"all", search:'' })
                // onClick();
        }
        })
    }
} 
function goBack(e){
    e.preventDefault();
    
    navigate('/');
  }
    return(
        <div className="wrap_add  "  >
            <Header title={"내역 추가하기"}  />
            
                <input className='date' id='dataInput'   onClick={dataInput}  ref={dateRef} type='date'   value={state.date}  onChange={handleChangeDate} />
                <div>
                    
                    <label htmlFor={'memo'} style={{ display:"block",   fontSize:"18px" }}>메모</label>
                    <input id={'memo'}  className='text2' placeholder='메모를 입력하세요.'  ref={contentRef} type='text'/>
                    <select ref={plusRef} >
                        <option value={"+1"}>입금</option>
                        <option value={"-1"}>출금</option>
                    </select>
                    <input className='text' placeholder='금액를 입력하세요.' onChange={onlyNumber}  ref={textRef} type='text'/>
                </div>
                <div className='btn'>
                    <Button  text={"등록"} onClick={onSubmit} className={"btn_add"} />
                    <Button text={"취소"} onClick={goBack}   className={"btn_back"} />
                </div>
           
        </div>
    )
}