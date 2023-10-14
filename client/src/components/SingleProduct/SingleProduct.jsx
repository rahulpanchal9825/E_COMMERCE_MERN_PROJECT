import React, {useContext, useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";


const SingleProduct =  () => {

  const [quantity, setquantity] = useState(1);
  const [product,setproduct] = useState();
  const params = useParams();
  const {handleAddToCart} = useContext(Context);
  const key= params.key;
  const FetchApi=async(url) =>{
    const response = await fetch(`http://localhost:3002/api/${url}`,{
      headers:{
        Authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    const product = await response.json();
    setproduct(product);
} 
useEffect(()=>{
FetchApi(`/search/${key}`);
},[key])
  
  const increment = () =>{
    setquantity(quantity+1)
  }
  const decrement = () =>{
   quantity===1?setquantity(1):setquantity(quantity-1)
  }
  return (
    <>
    { product &&
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={product.img} alt="" />
            </div>
            <div className="right">
              <span className="name">{product.title}</span>
              <span className="price">Price: &#8377;{product.price}</span>
              <span className="desc">{product.desc}</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                   <span onClick={increment} >+</span>
                  <span>{quantity} </span>
                  <span onClick={decrement} >-</span> 
                 </div>
               
                <button className="add-to-cart-button" onClick={() =>{
                  handleAddToCart(product,quantity)
                  alert("Product added successfully")
                  setquantity(1);
                }}  >
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
                
              </div>

              <span className="divider" />

              <div className="info-item">
                <span className="text-bold">
                  Category : <span>{product.categories}</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                    <FaTwitter size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </> 
  );
}

export default SingleProduct;
