import {useState, useEffect} from "react";

//THIS IS CUTOM HOOK
function usePostTitlle(){
    const [post, setPost]=useState({});

    async function getPosts(){

        //send backend req to specific data
        const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json=await response.json();
        setPost(json);

       
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;

}

export function useFetch(url){
    const [finalData,setFinalData]=useState({});


    async function getDetails(){

        //send backend req to generic data
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);

    }
    useEffect(()=>{
        getDetails();
    },[])


    return {
        finalData
    }
}


export default usePostTitlle;