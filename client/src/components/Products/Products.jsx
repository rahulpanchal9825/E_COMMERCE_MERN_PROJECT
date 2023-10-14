import React, { useContext } from "react";
import Product from "./Product/Product";
import "./Products.scss";
import { Context } from "../../utils/context";

const Products = ({ innerPage, headingText}) => {
  const {products} = useContext(Context);

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        { products && products.map(item =>(
            <Product key={item._id} data={item}/> 
        )
          )
        }
      </div>

    </div>
  )
};
export default Products;
