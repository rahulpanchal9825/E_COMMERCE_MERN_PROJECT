import React from 'react';
import Cat1 from '../../../assets/cat-1.jpg';
import Cat2 from '../../../assets/cat-2.jpg';
import Cat3 from '../../../assets/cat-3.jpg';
import Cat4 from '../../../assets/cat-4.jpg';
import './Category.scss';
import {useNavigate} from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  // const params = useParams();
  const handlecat1 = () =>{
    navigate(`getcategories/headphones`)
  }
  const handlecat2 = () =>{
    navigate(`/getcategories/smartwatchs`)
  }
  const handlecat3 = () =>{
    navigate(`/getcategories/speakers`)
  }
  const handlecat4 = () =>{
    navigate(`/getcategories/earbuds`)
  }
  return (
    <div>
       <div className="shop-by-category">
      <div className="categories">
        <div className="category" onClick={handlecat1}>
          <img src={Cat1} alt="" />
        </div>
        <div className="category" onClick={handlecat2}>
          <img  src={Cat2} alt="" />
        </div>
        <div className="category" onClick={handlecat3}>
          <img  src={Cat3} alt="" />
        </div>
        <div className="category" onClick={handlecat4}>
          <img  src={Cat4} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Category
