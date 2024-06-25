import "./Home.css"
import ReviewList from "./ReviewList"
import ReviewPost from "./ReviewPost"

export default function Home(){

    return(
        <div className="home">
            <h1>Review List</h1>
            <div className="reviewWrap">
                <ReviewList/>
                <ReviewPost/>
            </div>

        </div>
    )
}