

export default function ReviewPost(){

    return(
        <div className="reviewPost">
                    <h2>리뷰 작성하기</h2>
                    <textarea  maxlength="300" placeholder="리뷰를 입력해주세요."  type="text" />
                    <button>등록</button>
         </div>
    )
}