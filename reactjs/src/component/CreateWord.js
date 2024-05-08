import useFetch from "../hooks/useFetch"


export default function CreateWord(){

    const days = useFetch("http://localhost:3001/days")

    return(
        <form>
            <div className="input_area">
                <label>eng</label>
                <input type="text" placeholder="computer"/>
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="컴퓨터"/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select>
                    {days.map((it)=>(
                        <option key={it.id} value={it.day}>{it.day}</option>
                    ))}
                     
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}