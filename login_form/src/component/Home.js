import "./Home.css"
import ReviewList from "./ReviewList"
import ReviewPost from "./ReviewPost"

export default function Home({LogInCheck, dataSave, data}){

    return(
        <div className="home">
            <h1>Review List</h1>
            <div className="reviewWrap">
                <ReviewList data={data} dataSave={dataSave} />
                <ReviewPost dataSave={dataSave} LogInCheck={LogInCheck}/>
            </div>

        </div>
    )
}