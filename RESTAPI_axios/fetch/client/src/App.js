import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState(null);

  

  const fetchData = async ()=>{
    const res = await axios.get('http://localhost:4000/api/todo') 
      setTodoList(res.data) 
    // fetch('http://localhost:4000/api/todo')
    // .then(res=>{
    //   return res.json();
    // })
    // .then(data=>{
    //   setTodoList(data);
    // })
  }

  useEffect(()=>{
    fetchData();
  },[])

 
  function onSubmithandler(e){
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;

    axios.post('http://localhost:4000/api/todo', {text, done});
    fetchData()
    // fetch('http://localhost:4000/api/todo',{
    //   method:"POST",
    //   headers : {
    //     'Content-Type' : 'application/json'
    //   },
    //   body : JSON.stringify({
    //     text,
    //     done,
    //   })
    // })
    //  .then(()=>
    //   fetchData()
    // )
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmithandler}>
        <input name="text"/>
        <input name="done" type="checkbox"/>
        <input name="submit" value={"추가"} type="submit" />
      </form>
       <ul>
        {todoList?.map((todo)=>(
          <div key={todo.id} style={{display:"flex"}}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? 'Y' : 'N'}</div>
          </div>
        ))}
       </ul>
    </div>
  );
}

export default App;
