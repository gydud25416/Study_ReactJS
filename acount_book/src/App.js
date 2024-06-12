 
import { useEffect, useState } from 'react';
import './App.css';
import Button from './component/Button';
import Graph from './component/Graph';
import Header from './component/Header';
import ItemList from './component/ItemList';
import Total from './component/Total';
import Add from './component/Add';
import useFetch from './hooks/useFetch';

function App() {
  const item = useFetch('https://midnight-cumbersome-cashew.glitch.me/item');

  const [addData, setAddData] = useState(item);
  const [btn, setBtn] = useState(false);

  function OnclickBtn(){
      setBtn(!btn);
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
  

  return (
    <>
    <div className="main_wrap">
       <Header/>
       <Graph addData={addData}/>
       <Total addData={addData}/>
       <ItemList addData={addData} DelData={DelData}/>
       <Button text={"추가하기"} onClick={OnclickBtn} className={ !btn ? "btn_box" : "btn_box off" } />
    </div>
    <Add btn={btn} onClick={OnclickBtn} AddData={AddData}/>
    </>
  );
}

export default App;
