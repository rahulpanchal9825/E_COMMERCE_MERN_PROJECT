import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import "../Header/Header.scss";
import { Context } from "../../utils/context";

const Header = () => {
  const [scrollled, setscrolled] = useState(false);
  const [showcart, setshowcart] = useState(false);
  const [showsearch, setshowsearch] = useState(false);
  const { CartCount } = useContext(Context);  

  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);
  const clearlogin = () => {
    localStorage.clear();
  };
  const token = localStorage.getItem("token");
  return (
    <>
      <header className={`main-header ${scrollled ? "stikcy-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home </li>
            </Link>
           
          </ul>
          <div className="center">
            <Link to="/">RS</Link>
          </div>

          <div className="right">
             {!token?
              <span>
                <Link
                  to="/login"
                  className="login"
                >
                  LOGIN
                </Link>
              </span>
              :
              <span onClick={clearlogin}>
                <Link
                  to="/login"
                  className="login"
                >
                  LOG OUT
                </Link>
              </span>
              }
            <span>
              <Link to="/register" className="login">
                REGISTER
              </Link>
            </span>
            <TbSearch
              onClick={() => {
                setshowsearch(true);
              }}
            />
            {/* <AiOutlineHeart /> */}
            <span
              className="cart-icon"
              onClick={() => {
                setshowcart(true);
              }}
            >
              <CgShoppingCart />
              {!!CartCount && <span>{CartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setshowcart={setshowcart} />}
      {showsearch && <Search setshowsearch={setshowsearch} />}
    </>
  );
};

export default Header;
