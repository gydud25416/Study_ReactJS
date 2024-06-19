 
import './App.css';
import ContentView from './component/ContentView';
import Footer from './component/Footer';
import ContentsList from './component/ContentsList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import Home from './component/Home';
// import SideBar from './component/SideBar';

import { Routes, BrowserRouter, Route} from "react-router-dom"
import dummy from "./db/data.json"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='page_wrap'>
          {/* <SideBar/> */}
          <div className='contents_wrap'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/animals/' element={<ContentsList props={dummy.animals} title={'ANIMALS'} />}/>
              <Route path='/foods/' element={<ContentsList props={dummy.foods} title={'FOODS'} />}/>
              <Route path='/animals/:item' element={<ContentView props={dummy.animals}/>}/>
              <Route path='/foods/:item' element={<ContentView props={dummy.foods}/>}/>
              <Route path='*' element={<EmptyPage/>}/>
  
            </Routes>
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
