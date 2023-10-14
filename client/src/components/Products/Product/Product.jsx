import { useNavigate, useParams } from "react-router-dom";
import "./Product.scss";

const Product = ({ data }) => {

  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`search/${data._id}`)}>
      <div className="thumbnail">
        <img src={data.img} alt="Not Available" />
      </div>
      <div className="product-details">
        <span className="name">{data.title}</span>

        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
