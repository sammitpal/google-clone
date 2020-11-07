import {useState, useEffect} from 'react'
import API_KEY from './keys';

const CONTEXT_KEY = "b55603f49fef89787";
function useGoogleSearch(term) {
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?q=${term}&key=${API_KEY}&cx=${CONTEXT_KEY}`
            )
            .then(response => response.json())
            .then(result=>{
                setData(result);
            })
        }
        fetchData();
    },[term])

    return {data}
};

export default useGoogleSearch
