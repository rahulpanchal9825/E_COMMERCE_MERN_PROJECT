import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [products, setproducts] = useState();
  const [CartItemes, setCartItemes] = useState([]);
  const [CartCount, setCartCount] = useState(0);
  const [CartSubtotal, setCartSubtotal] = useState(0);
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])
   
  useEffect(() => {
    let count = 0;
    CartItemes.map(item => count += item.quantity)
    setCartCount(count);


    let subtotal = 0;
    CartItemes.map(item => subtotal += item.price * item.quantity)
    setCartSubtotal(subtotal)
  }, [CartItemes]);

  const handleAddToCart = (product, quantity) => {
    let items = [...CartItemes];
    let index = items.findIndex((p) => p._id === product._id);

    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      product.quantity = quantity;
      items = [...items, product];
    }
    setCartItemes(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...CartItemes];
    items = items.filter((p) => p.id !== product.id);
    setCartItemes(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...CartItemes];
    let index = items.findIndex((p) => p._id === product._id);
    if(type ==='inc'){
      items[index].quantity += 1
    }
    else if(type ==='dec'){
      if(items[index].quantity ===1) return;
      items[index].quantity -= 1;
    }
    setCartItemes(items)

    }
  return (
    <Context.Provider
      value={{
        products,
        setproducts,
        CartItemes,
        setCartItemes,
        CartCount,
        setCartCount,
        CartSubtotal,
        setCartSubtotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;
