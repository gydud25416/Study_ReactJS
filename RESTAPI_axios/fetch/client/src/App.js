import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([]);

fetch('http://localhost:4000/api/todo')
.then(res=>{
  return res.json();
})
.then(data=>{
    setData(data);
})

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <ul>
        {data.map((it)=>(
          <li key={it.id}>
              {it.text}
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default App;
