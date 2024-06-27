import Button from "./Button";
import Graph from "./Graph";
import Header from "./Header";
import ItemList from "./ItemList";
import Total from "./Total";

export default  function Home({addData, DelData,FilterData,  OnclickBtn, saveData}){
    
    return(
        <>
           <Header  title={"가계부"}  />
        <Graph addData={addData}/>
       <Total addData={addData}/>
       <ItemList addData={addData} DelData={DelData} FilterData={FilterData} saveData={saveData} />
       <Button text={"추가하기"} onClick={OnclickBtn} className={ "btn_box"   } />
        </>
    )
}