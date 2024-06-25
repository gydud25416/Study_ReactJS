
export default function ReviewList(){

    return(
        <div className="reviewList">
        <ul>
            <li>
                <p className="reviewName">
                    <span>김철수 님</span>
                    <span>2024-05-32</span>
                </p>
                <p className="reviewContents">잘 보고 갑니다.</p>
            </li>
            <li>
                <p className="reviewName">
                    <span>홍길동 님</span>
                    <span>2024-05-32</span>

                </p>
                <p className="reviewContents">항상 행복하세요.</p>
            </li>
        </ul>
    </div>
    )
}