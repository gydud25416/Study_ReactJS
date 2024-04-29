 
import './App.css';
import ContentView from './component/ContentView';
 
import ContentsList from './component/ContentsList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { Routes, BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='page_wrap'>
          <SideBar/>
          
          <Routes>
            <Route path='/' element={<ContentsList/>}/>
            <Route path='/item/:item' element={<ContentView/>}/>
            <Route path='/*' element={<EmptyPage/>}/>
 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
