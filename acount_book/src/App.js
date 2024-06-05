 
import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Graph from './component/Graph';
import Header from './component/Header';
import ItemList from './component/ItemList';
import Total from './component/Total';
import Add from './component/Add';

function App() {

  const [btn, setBtn] = useState(false);

  function OnclickBtn(){
      setBtn(!btn);
  }

  return (
    <>
    <div className="main_wrap">
       <Header/>
       <Graph/>
       <Total/>
       <ItemList/>
       <Button text={"추가하기"} onClick={OnclickBtn} className={ !btn ? "btn_box" : "btn_box off" } />
    </div>
    <Add btn={btn} onClick={OnclickBtn} />
    </>
  );
}

export default App;
