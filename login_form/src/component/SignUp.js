import { useRef } from 'react'
import './LogIn.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function SignUp(){
    const navigation = useNavigate();
    const nameRef = useRef(null);
    const idRef = useRef(null);
    const pwRef = useRef(null);

    function onSubmit( ){
        const name = nameRef.current.value;
        const id = idRef.current.value;
        const pw = pwRef.current.value; 

        if(!name){
            alert("이름을 입력해주세요!"); 
            nameRef.current.focus()
            return false;
        }
        if(!id){
            alert("아이디를 입력해주세요!"); 
            idRef.current.focus()
            return false;
        }
        if(!pw){
            alert("비밀번호를 입력해주세요!"); 
            pwRef.current.focus()
            return false;
        }
        if(window.confirm("회원가입 하시겠습니까?")){ 
            axios.post('http://localhost:3001/members' , {
                memName: name,
                memId:id,
                memPw:pw
            }) 

            alert("회원가입이 완료되었습니다!")
            navigation('/')
        }

    }

    return(
        <div className="loginWrap">
            <h1>회원가입</h1>
            <div className='loginContents'>
                <div>
                    <div className="inputWrap">
                        <label htmlFor="item_name">이름</label>
                        <input name="item_name" ref={nameRef} id="item_name" type="text" />
                    </div>
                    <div className="inputWrap">
                        <label htmlFor="item_id">아이디</label>
                        <input name="item_id" ref={idRef} id="item_id" type="text" />
                    </div>
                    <div className="inputWrap">
                        <label htmlFor="item_pw">비밀번호</label>
                        <input name="item_pw" ref={pwRef} id="item_pw" type="password" />
                    </div>
                </div>
            </div>
            <button className='signup' onClick={onSubmit}>회원가입</button>
        </div>
    )
}