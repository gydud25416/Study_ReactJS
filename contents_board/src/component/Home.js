import ContentsList from "./ContentsList";
import dummy from "../db/data.json"
import './Home.css'

const Home = ()=>{

    return(
        <div className="home">
            <h1>HOME</h1>
            <div className="haedLine">
                <h2>ANIMALS</h2>
                <ContentsList props={dummy.animals} headline={true}/>
            </div>
            <div className="haedLine">
                <h2>FOODS</h2>
                <ContentsList props={dummy.foods} headline={true}/>
            </div>
            
        </div>
    )
}
export default Home;