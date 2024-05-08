import { useEffect, useState } from "react";
export default function useFetch(url){
    const [data, setWord] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setWord(data)
        })
    },[url]);

    return data;

}