import useFetch from '../hooks/useFetch'
import './Total.css'
export default function Total(){

    const item = useFetch('http://localhost:3001/item')

    return(
        <div className="wrap_total">
            <h2>총 자산</h2>
            <p>{item.reduce((sum, item)=> sum + parseInt(item.add)*parseInt(item.money, 10), 0)}원</p>
        </div>
    )
}