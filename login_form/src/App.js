 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
 
import Home from './component/Home';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
 

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content_wrap'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
