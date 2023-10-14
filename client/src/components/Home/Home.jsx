import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import Category from "../Home/Category/Category";
import { Context } from "../../utils/context";
const Home= () => {
  const { products, setproducts } = useContext(Context);
  const FetchApi=async(url) =>{
    try {
      const response = await fetch(`http://localhost:3002/api${url}`,{
        headers:{
          Authorization:JSON.parse(localStorage.getItem('token'))
        }
      });
      const prods = await response.json();
      setproducts(prods);
    } catch (error) {
      console.log(error);
    }
  }
 useEffect(()=>{
  FetchApi('/getproducts');
 },[])


  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
           <Category headingText="Product Category" />
             <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;