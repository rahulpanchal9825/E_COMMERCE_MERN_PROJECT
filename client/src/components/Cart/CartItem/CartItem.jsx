import React from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const CartItmes = useContext(Context);
  const items = CartItmes.CartItemes
  const {handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);

  return (
    <div className="cart-products">
    {items?.map((item) => (
        <div
            className="search-result-item"
            key={item._id}
            onClick={() => {}}
        >
            <div className="image-container">
                <img
                    src={
                       item.img
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{item.title}</span>
                <MdClose
                    className="close-btn"
                    onClick={() => handleRemoveFromCart(item)}
                />
                <div className="quantity-buttons">
                    <span
                        onClick={() =>
                            handleCartProductQuantity("dec", item)
                        }
                    >
                        -
                    </span>
                    <span>{item.quantity}</span>
                    <span
                        onClick={() =>
                            handleCartProductQuantity("inc", item)
                        }
                    >
                        +
                    </span>
                </div>
                <div className="text">
                    <span>{item.quantity}</span>
                    <span>x</span>
                    <span className="highlight">
                        <span>&#8377;</span>
                        {item.price *
                            item.quantity}
                    </span>
                </div>
            </div>
        </div>
    ))}
</div>
  )
};

export default CartItem;
