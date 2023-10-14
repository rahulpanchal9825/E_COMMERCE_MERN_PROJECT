import React from 'react';
import './Search.scss';
import { MdClose } from 'react-icons/md';
import Product1 from '../../../assets/cat-1.jpg';
import { useEffect,useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Search = ({setshowsearch}) => {
  const [query, setquery] = useState();
  const [products,setproducts] = useState();
  const navigate = useNavigate();
  const FetchApi = async (url) => {
    try {
      let response = await fetch(`http://localhost:3002/api/${url}`,{
        headers:{
          Authorization:JSON.parse(localStorage.getItem('token'))
        }
      });
      let prods = await response.json();
      setproducts(prods);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchApi(`find/${query}`);
  }, [FetchApi]);

  const change = (e) => {
    setquery(e.target.value);
  }
 
  return (
    <div className='search-modal'>
      <div className="form-field">
        <input type="text" autoFocus placeholder='Seach for products' onChange={change} value={query}
         />
         <MdClose onClick={() => setshowsearch(false)}/>
      </div>

      {products?.map(product=>{
      return (
        <div className="search-result-content" key={product._id}>
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container" onClick={()=>{navigate(`search/${product._id}`)}}>
              <img src={product.img} alt=""  />
            </div>
            <div className="prod-details">
              <span className="name">{product.title}</span>
              <div className="desc">{product.desc}</div>
            </div>
          </div>
        </div>
      </div>
      )
      }) }

    </div>
  )
}

export default Search
