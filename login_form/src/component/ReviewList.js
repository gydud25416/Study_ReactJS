 
export default function ReviewList({data}){     
    return(
        <div className="reviewList">
        <ul> 
            {data?.map((it)=>(
                <li key={it.id}>
                    <p className="reviewName">
                        <span>{it.memName} 님</span>                    
                        <span>{it.day}</span> 
                    </p>
                    <p className="reviewContents">{it.content}</p>
                </li>
            ))} 
        </ul>
    </div>
    )
}