import './Total.css'
export default function Total({addData}){ 

    if(addData.length === 0){
        return(
            <div className="wrap_total">
                <h2>총 자산</h2>
                <p>불러오는중 ...</p>
            </div>
        )
    }else{
    return(
        <div className="wrap_total">
            <h2>총 자산</h2>
            <p>{addData.reduce((sum, addData)=> sum + parseInt(addData.add)*parseInt(addData.money, 10), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        </div>
    )
}}