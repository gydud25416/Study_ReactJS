 
import { useEffect, useState } from 'react';
import {  Routes, Route, useNavigate} from "react-router-dom"
import './App.css';  
import Add from './component/Add';
import useFetch from './hooks/useFetch';
import Home from './component/Home';

function App() {
  const item = useFetch('https://midnight-cumbersome-cashew.glitch.me/item');

  const [addData, setAddData] = useState(item); 
  const [saveData, setSaveData] = useState('');
  const navigate = useNavigate()
  function OnclickBtn(){
    navigate('/add/')
  } 
  useEffect(()=>{
    setAddData(item);

  },[item])

  function AddData(newItem){
    setAddData(it=>[...it, newItem].sort((a,b)=>new Date(b.day) - new Date(a.day)));
  }

  function DelData(delData){
    setAddData(addData.filter(it=>( it.id !== delData.id)))

  }

  
  function FilterData(filterData){
    setSaveData(filterData);
  }


  return (
    <>
    {item.length === 0 ? (
      <div className='loading'>
        <p>데이터를 불러오는 중입니다...</p>
        <div className='circle'></div>
      </div>
    ):(
      <div style={{display:'none'}}></div>
    )}
    
    <div className="main_wrap">
    
      <Routes>
        <Route path='/' element={<Home addData={addData} DelData={DelData} saveData={saveData} FilterData={FilterData}  OnclickBtn={OnclickBtn}/>}/>
        <Route path='/add/' element={<Add FilterData={FilterData} saveData={saveData}  addData={addData} AddData={AddData}/>} />
      </Routes>

    </div>
 
    </>
  );
}

export default App;
