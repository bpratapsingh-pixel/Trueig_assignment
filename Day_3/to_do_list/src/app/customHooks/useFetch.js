import {useState,useEffect} from "react";
const useFetch =()=>{
   const[data,setData] = useState();
   useEffect(()=>{
        try{
            let res = localStorage.getItem('items');
            if(res){
                let items = JSON.parse(res)
                setData(items);
            }
            throw new Error("Items are empty")
        }catch(e){
            console.log("Error : "+ e)
        }
   },[])
   return [data,setData]
} 
export default useFetch;