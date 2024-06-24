import "./Home.css"

export default function Home(){

    return(
        <div className="home">
            <h1>Review List</h1>
            <div className="reviewWrap">
                <div className="reviewList">
                    <ul>
                        <li>
                            <p className="reviewId">gydud25416</p>
                            <p className="reviewContents">잘 보고 갑니다.</p>
                        </li>
                        <li>
                            <p className="reviewId">hyjang</p>
                            <p className="reviewContents">항상 행복하세요.</p>
                        </li>
                    </ul>
                </div>
                <div className="reviewPost">
                    <h2>리뷰 작성하기</h2>
                    <input type="text" />
                </div>
            </div>

        </div>
    )
}