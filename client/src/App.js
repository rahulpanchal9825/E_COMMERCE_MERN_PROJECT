import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Upload from "./upload/Upload";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Checkout from "./components/Cart/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getcategories/:id" element={<Category />} />
          <Route path="/search/:key" element={<SingleProduct />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
