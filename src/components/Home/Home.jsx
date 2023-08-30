import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_actions } from "../store/reducers";
import Card from "./Card";

const HomePage = ()=>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchApi = async ()=>{
              try{
                const response = await fetch(' https://boppotech.github.io/react-task-json.github.io/reactjob.json');
                const result = await response.json();
                const dataWithId = result.map((item, index)=>{
                      return {...item, id: index}
                })
                // console.log(result);
                dispatch(product_actions.updateProductData(dataWithId));
              }
              catch(error){
                console.log(error);
              }
        }
        fetchApi();
    },[])

      return (
        <div>
            <Card/>
        </div>
      )
}

export default HomePage;