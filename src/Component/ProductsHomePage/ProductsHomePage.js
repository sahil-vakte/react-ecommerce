import React, { useEffect, useState } from "react";
import "./ProductsHomePage.css";
import axios from "axios";

const ProductsHomePage = () => {
  const [products, setproducts] = useState([]);
  const [printProducts, setprintProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((response) => {
      setproducts(response.data);
      setprintProducts(response.data);
    });
  }, []);


  const AllCategory = products
    .map((index) => index.category)
    .filter((value, index, self) => self.indexOf(value) === index);

    
  const handleCategoryName = (categoryselect) => {
    const FilterdedProducts = products.filter(
      (productsfilterbycategory) =>
        productsfilterbycategory.category === categoryselect
    );
    setprintProducts(FilterdedProducts)
  }


  // console.log("selectedCategory =>", selectedCategory);

  return (
    <div className="ProductsHomePage-flex-div">
      <div className="ProductsHomePage-width-div">
        <div className="ProductsHomePage-main-div">
          <div className="ProductsHomePage-main-div-one">
            <div className="ProductsHomePage-main-div-one-padding">
              {AllCategory &&
                AllCategory?.map((index) => (
                  <div style={{ textAlign: "left" }}>
                    <h1
                      style={{ fontSize: "19px", cursor: "pointer" }}
                      onClick={(e) => handleCategoryName(index)}
                    >
                      {index}
                    </h1>
                  </div>
                ))}
            </div>
          </div>
          <div className="ProductsHomePage-main-div-two">
            <div className="ProductsHomePage-main-div-two-for-flex">
              {printProducts &&
                printProducts?.map((index) => (
                  <div className="products-card-main-div-one">
                    <div className="products-card-div-for-image">
                      <img
                        src={index.image}
                        alt=""
                        className="products-card-div-for-image-tag"
                      />
                    </div>
                    <div>
                      <p className="products-title-para-tag">{index.title}</p>
                      <div className="products-price-div">
                        <p>${index.price}</p>
                      </div>
                      <p className="category-op-product">{index.category}</p>
                    </div>
                    <div className="desc-ription-of-product">
                      <p className="description-para-tag">
                        {index.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHomePage;
