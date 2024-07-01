 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
 
import Home from './component/Home';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import { useState } from 'react';
 

function App() {
  const [LogInCheck, setLogInCheck] = useState(false); 
  function LogInFunc(state){
    setLogInCheck(state)
  } 
  return (
    <div className="App">
      <Header LogInFunc={LogInFunc} LogInCheck={LogInCheck}/>
      <div className='content_wrap'>
        <Routes>
          <Route path='/' element={<Home LogInCheck={LogInCheck}/>} />
          <Route path='/login' element={<LogIn LogInFunc={LogInFunc}/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
