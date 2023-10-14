import React from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = ({ setshowcart }) => {
  const navigate = useNavigate();
  const { CartItemes, CartSubtotal } = useContext(Context);
  const checkout =()=>{
    const token = localStorage.getItem('token');
    if(!token){
      alert("Please Login")
    }
    else{  
    navigate('/checkout')
    setshowcart(false)
    }
  }
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span
            className="close-btn"
            onClick={() => {
              setshowcart(false);
            }}
          >
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {CartSubtotal >0 ?
        <>
          <CartItem/>
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal</span>
              <span className="text total">&#8377; {CartSubtotal}</span>
            </div>
            <div className="button" onClick={checkout}>
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
          </>
          :
          <>
            <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div>
                    </>
          }
         
      </div>
    </div>
  )
};

export default Cart;
