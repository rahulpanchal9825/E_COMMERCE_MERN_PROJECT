import React, { useContext, useEffect, useState } from "react";
import "./Category.scss";
import { useNavigate, useParams } from "react-router-dom";
// import { TbH1 } from "react-icons/tb";

const Category = () => {
  const[categories,setcategories] = useState();
  const params = useParams();
  const navigate = useNavigate(); 

  const FetchApi=async(url) =>{
      const response = await fetch(`http://localhost:3002/api/${url}`,{
        headers:{
          Authorization:JSON.parse(localStorage.getItem('token'))
        }
      });
      const products = await response.json();
      setcategories(products)
  } 
 useEffect(()=>{
  FetchApi(`getcategories/${params.id}`);
 },[])
console.log(categories);
  return (
    <div className="category-main-contentr">
      <div className="layout">
        <div className="category-title ">
          {`${params.id.toUpperCase()}`} CATEGORY
        </div>
        <div className="product-container">
          <div className="products" style={{ display: "flex" }}>
            {categories?categories.map((product) => {
                return(
                <div
                  className="product-card"
                  key={product._id}
                  onClick={() => navigate(`/search/${product._id}`)}
                >
                  <div className="thumbnail">
                    <img src={product.img} alt="Not Available" />
                  </div>
                  <div className="product-details">
                    <span className="name">{product.title}</span>

                    <span className="price">&#8377;{product.price}</span>
                  </div>
                </div>
                )
              })
            :(
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
