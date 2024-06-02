import useFetch from '../hooks/useFetch'
import './ItemList.css'
import ItemView from './ItemView'

export default function ItemList(){
    const item = useFetch('http://localhost:3001/item')

    return(
        <div className="wrap_list">
            <div className="list_header">
                <select>
                <option value={2024}>2024</option>
                <option value={2023}>2023</option>
                </select>

                <ul>
                    <li className='on'>전체</li>
                    <li>입금</li>
                    <li>출금</li>
                </ul>
            </div>
            <div className='list_view'>
                <ul className="wrap_view">
                    {item.map((it, idx)=>(
                        <ItemView key={idx} it={it} />
                    ))} 
                </ul>
            </div>
        </div>
    )
    
}