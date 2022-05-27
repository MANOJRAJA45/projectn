import React,{createContext,useEffect,useState} from "react";
import axios from "axios";

export const NewsApi=createContext();
export const NewsApiProvider=(props)=>{
    const[data,setData]=useState();
    const apiKey="1aa4489bed474dc39183ed9ac523e49a";  // cfb53cab9ba74f98b305f568effdc41e
    useEffect(()=>{
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
          .then((response)=>setData(response.data))
          .catch((error)=>console.log(error));
    },[data]);

    return (
        <NewsApi.Provider value={{data}}>
            {props.children}
        </NewsApi.Provider>
    );
};