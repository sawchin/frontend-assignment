import React from "react";
import Hero from "../components/hero";
import Product from "../app/products/page";

const Homepage = () => {
  return (
    <div>
      <Hero
        heading="Explore with shopping.."
        message="Lets shop with the new brand taste.."
      />
      <Product />
    </div>
  );
};

export default Homepage;
