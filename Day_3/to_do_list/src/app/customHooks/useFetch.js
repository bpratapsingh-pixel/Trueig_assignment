"use client";
import {useState,useEffect} from "react";
const useFetch =()=>{
   const[data,setData] = useState([]);
   useEffect(()=>{
        try{
            let res = localStorage.getItem('items');
            if(res){
                let items = JSON.parse(res)
                if(items){
                    setData(items);
                }else{
                    throw new Error("Items are empty")
                }
            }
            else{
                throw new Error("Items are not availble")
            }
        }catch(e){
            console.log("Error : "+ e)
        }
   },[])
   return [data,setData]
} 
export default useFetch;