import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [data,setdata] = useState();
    const tk = localStorage.getItem('token');
    const FetchApi=async(url) =>{
          const response = await fetch(`http://localhost:3002/api${url}`,{
            headers:{
              authorization:tk
            }
          })
          const prods = await response.json();
          setdata(prods);
      }
     useEffect(()=>{
      FetchApi('/checkout');
     },[])
  return (
    <h1 style={{color:"black"}}>Payment page</h1>
  )
}

export default Checkout;
