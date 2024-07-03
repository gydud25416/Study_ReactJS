import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import secureLocalStorage from "react-secure-storage"; 
 
export default function ReviewPost({LogInCheck, dataSave  }){
    const navigate = useNavigate(null);
    const refText = useRef(null);
    function handleOnClickCheck(){
        if(!LogInCheck){
            alert("로그인이 필요합니다.");
            navigate('/login') ;
        }
    }  
    function HondleOnClickPost(){

        if(window.confirm("등록하시겠습니까?")){
        const memInfo = secureLocalStorage.getItem("memInfo")
        axios.post('http://localhost:3001/review',{ 
            memName: memInfo[0].memName ,
            memId:  memInfo[0].memId ,
            day:"2024-06-03",
            content:  refText.current.value 
        }) 
        .then(res=>{ 
            dataSave(res) 
        })
        alert("등록되었습니다.")
        refText.current.value = ''; 
        }
    }

    return(
        <div className="reviewPost">
                    <h2>리뷰 작성하기</h2>
                    <textarea onClick={handleOnClickCheck} ref={refText}  maxLength="300" placeholder="리뷰를 입력해주세요."  type="text" />
                    <button onClick={HondleOnClickPost}>등록</button>
         </div>
    )
}