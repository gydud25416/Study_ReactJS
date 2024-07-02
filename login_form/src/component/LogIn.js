import './LogIn.css'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import useFetch from '../hooks/useFetch';

export default function LogIn({LogInFunc}){
    const navigate = useNavigate(null);
    const item = useFetch('http://localhost:3001/members');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
 

    function handleChageId(e){
        setId(e.target.value);
    }

    function handleChagePw(e){
        setPw(e.target.value);
    }

    function onSubmit(){
        axios.post('http://localhost:3001/members',{id, pw})
        .then((res)=>{ 
            const result = item.data.find((item)=> item.memId === id && item.memPw === pw);
            
            if(result){ 
                navigate('/')
                LogInFunc(true); 
            }else{
                alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
                LogInFunc(false); 
            }
            axios.delete(`http://localhost:3001/members/${id}`);
        }) 
        .catch((err) => {
            console.error('에러 발생:', err);
          });
    }

    return(
        <div className="loginWrap">
            <h1>로그인</h1>
            <div className='loginContents'>
                <div>
                    <div className="inputWrap">
                        <label htmlFor="item_id">아이디</label>
                        <input name="item_id" onChange={handleChageId} value={id} id="item_id" type="text" />
                    </div>
                    <div className="inputWrap">
                        <label htmlFor="item_pw">비밀번호</label>
                        <input name="item_pw" onChange={handleChagePw} value={pw} id="item_pw" type="password" />
                    </div>
                </div>
                <button onClick={onSubmit}>로그인</button> 
            </div>
            <Link to={'/signup'}>회원가입</Link>
        </div>
    )
}