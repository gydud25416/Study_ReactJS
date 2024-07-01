import { useNavigate } from "react-router-dom"
 
export default function ReviewPost({LogInCheck}){
    const navigate = useNavigate(null);
    function handleOnClickCheck(){
        if(!LogInCheck){
            alert("로그인이 필요합니다.")
            navigate('/login')
        }
    }
 

    return(
        <div className="reviewPost">
                    <h2>리뷰 작성하기</h2>
                    <textarea onClick={handleOnClickCheck}  maxlength="300" placeholder="리뷰를 입력해주세요."  type="text" />
                    <button >등록</button>
         </div>
    )
}