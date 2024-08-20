import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
  }

  return (
    <>
        <h1>
            HomePage!!
        </h1>
        <Link to="/about">Go to about page</Link>
        <button onClick={goProductPage}>go to product page</button>
    </>
  )
}

export default Homepage