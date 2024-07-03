 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
 
import Home from './component/Home';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import { useEffect, useState } from 'react';
import secureLocalStorage from 'react-secure-storage';
import useFetch from './hooks/useFetch';
 

function App() {
  const item = useFetch('http://localhost:3001/review') 
  const [LogInCheck, setLogInCheck] = useState(false); 
  const [data, setData] = useState(item);
 
  function LogInFunc(state){ 
    setLogInCheck(state)
  }  
  function dataSave(review){
    setData(it=>[...it, review.data])
  }

  useEffect(()=>{
    setData(item.data);   
  },[item])

  useEffect(()=>{ 
    const AutoLogIn = secureLocalStorage.getItem("AutoLogIn");
    setLogInCheck(AutoLogIn);   
  },[])

  return (
    <div className="App">
      <Header LogInFunc={LogInFunc} LogInCheck={LogInCheck}/>
      <div className='content_wrap'>
        <Routes>
          <Route path='/' element={<Home data={data} dataSave={dataSave}  LogInCheck={LogInCheck}/>} />
          <Route path='/login' element={<LogIn LogInFunc={LogInFunc}/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
