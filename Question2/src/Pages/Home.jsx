import { useState,useEffect } from "react";
import NavBar from "../Components/NavBar";
import axios from 'axios'
import Card from "../Components/Card";



function Home()
{
  let [products,setProducts]=useState([])
    


      useEffect(()=>
      {
        axios.get('http://localhost:4000/data/api')
        .then((response) => {
          console.log(response.data)
          return setProducts(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      },[])
   

    return(
        <>
        <NavBar/>
      
      <div className="  m-auto flex flex-wrap gap-6 mt-[200px] w-full justify-center " >  
       {
        products.length > 0 && products.map((data)=>
        (
          <Card title={data.productName } price={data.price} discount={data.discount} availability={data.availability} />
        ))
       }
       </div>
           
        </>
    )
}
export default Home;