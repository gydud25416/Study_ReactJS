![image](https://github.com/user-attachments/assets/64b135ea-a35a-4ead-959f-9120b7b7daf5)
JSON 서버 구축

`npm install -g json-server`

데이터 생성

`npx json-server ./src/db/data.json --port 3001`

## GET 호출

```jsx
    const [days, setDays] = useState([]);
        
    useEffect(()=>{
       fetch('http://localhost:3001/days')
       .then(res=>{ //res는 실제 json이 아닌 HTTP응답으로, json()를 사용해야 json으로 변환되고 Promise를 반환한다.
            return res.json();
       })
              .then(data=>{
			        setDays(data)
       })
    },[])
```

<aside>
💡 `fetch()` 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.

</aside>

## PUT 호출
`fetch(”url”,객체요청의 옵션)`

```jsx
    function toggleDone(){ 
        fetch(`http://localhost:3001/words/${it.id}`, {
            method : 'PUT', //데이터가 덮어씌우는게 아닌, 업데이트 된다. 
            headers : {
                'Content-Type' : 'application/json', //보낼 콘텐츠 타입 설정
            },
            body: JSON.stringify({ //단순히 가져오는 GET과 다르게 수정할 콘텐츠를 싣는다. 
                ...it,
                isDone: !isDone, //기존 데이터에 !isDone을 추가한다.
            })
        })
        .then(res=>{ //Response(응답)을 받아서
            if(res.ok){ //Response이 ok면
                setIsDone(!isDone) //setIsDone 실행
            }
        })
    } 
    const [isDone, setIsDone] = useState(it.isDone);
    (...)
     <td><input type="checkbox" checked={ isDone} onChange={toggleDone}/></td>
     (...)
```

<aside>
💡 데이터가 바뀌면서 새로고침, 페이지 이동이 있어도 변하지 않는다.

</aside>

## DELETE 호출
```jsx
    function del(){
        if(window.confirm("삭제 하시겠습니까?")){
            fetch(`http://localhost:3001/words/${it.id}`, {
                method : "DELETE", //수정할 정보가 없기 때문에 여기까지만 보낸다.
        }
    )};
    }
```
<aside>
💡 data.json 파일의 데이터가 실시간으로 사라져 다시 불러오지 않는다.

</aside>

## POST 호출
```jsx

import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom";

export default function CreateDay(){
    const navigate = useNavigate();
    const days = useFetch("http://localhost:3001/days/")
    function addDay(){
        fetch("http://localhost:3001/days/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                id:days.length + 1,
                day : days.length + 1,
            })
        })
        .then(res=>{
            if(res.ok){
                navigate('/')
            }
        })
    }
 

    return(
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}
```
