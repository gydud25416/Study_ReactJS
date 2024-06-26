 
import './App.css';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
                <Route path='/' element={<DayList/>}/> 
                <Route path='/day/:day' element={<Day/>}/>
                <Route path='*' element={<EmptyPage/>}/>      
                <Route path='/create_word' element={<CreateWord/>}/>
                <Route path='/create_day' element={<CreateDay/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
 
