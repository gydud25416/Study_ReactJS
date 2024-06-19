import ContentsList from "./ContentsList";
import dummy from "../db/data.json"
import './Home.css'
import { Link } from "react-router-dom";

const Home = ()=>{

    return(
        <div className="home">
             {/* <h1>HOME</h1> */}
            <section className="animal_wrap">
               
                <div className="haedLine">
                    <Link to={"/animals/"}><h2>ANIMALS &gt;</h2></Link>
                    <ContentsList props={dummy.animals} headline={true}/>
                </div>
            </section>
            <section className="food_wrap">
                <div className="haedLine">
                    <Link to={"/foods/"}><h2>FOODS &gt;</h2></Link>
                    <ContentsList props={dummy.foods} headline={true}/>
                </div>
            </section>
        </div>
    )
}
export default Home;