import { Link } from "react-router-dom";

const EmptyPage = ()=>{

    return(
        <>
        <h1>존재하지 않는 페이지입니다.</h1>
        <Link to={'/'}>돌아가기</Link>
        </>
    )
}
export default EmptyPage;