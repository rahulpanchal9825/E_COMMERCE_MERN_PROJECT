import React, { useState } from "react";

const Upload = () => {
  const [title, settitle] = useState();
  const [img, setimg] = useState();
  const [desc, setdesc] = useState();
  const [price, setprice] = useState();
  const [categories, setcategories] = useState();
  const [stock, setstock] = useState();

  const handleupload  = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:3002/api/products', {
      method: 'POST',
      body: JSON.stringify({title,img,desc,price,categories,stock}),
      headers:{
        'content-type': 'application/json',
        Authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    alert('Successfully uploaded')
    window.location.reload();
  }
  return (
    <div>
      <h1>Product Details Upload</h1>
      <input type="text" placeholder="Enter Prouct title" onChange={(e) => settitle(e.target.value)} /> <br/>
      <input type="text" placeholder="Enter Product imgage url" onChange={(e) => setimg(e.target.value)} /> <br/>
      <input type="text" placeholder="Enter Product Description" onChange={(e) => setdesc(e.target.value)} /> <br/>
      <input type="text" placeholder="Enter Product Price" onChange={(e) => setprice(e.target.value)} /> <br/>
      <input type="text" placeholder="Enter Product Category" onChange={(e) => setcategories(e.target.value)} /> <br/>
      <input type="text" placeholder="Enter Product Stock" onChange={(e) => setstock(e.target.value)} /> <br/>
      <button onClick={handleupload}>Upload</button>
      <br />
    </div>
  );
};

export default Upload;
