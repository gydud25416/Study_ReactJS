import './LogIn.css'
import {Link} from 'react-router-dom'

export default function LogIn(){

    return(
        <div className="loginWrap">
            <h1>로그인</h1>
            <div className='loginContents'>
                <div>
                    <div className="inputWrap">
                        <label for="item_id">아이디</label>
                        <input name="item_id" id="item_id" type="text" />
                    </div>
                    <div className="inputWrap">
                        <label for="item_pw">비밀번호</label>
                        <input name="item_pw" id="item_pw" type="password" />
                    </div>
                </div>
                <button>로그인</button> 
            </div>
            <Link to={'/signup'}>회원가입</Link>
        </div>
    )
}