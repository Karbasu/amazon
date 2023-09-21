import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/sepatf23/mfd/unrec/WA_WW_3000._CB577862212_.jpg"
          alt="home"
        />
        <div className="home_row">
          {/* Home Decor items */}
          <Product
            id="00001"
            title="Indianara Set of 3 Beautiful Flower vases Framed Art Painting"
            image="https://m.media-amazon.com/images/I/81Zuw3FZQXL._AC_UL480_FMwebp_QL65_.jpg"
            price={902}
            rating={5}
          />
          <Product
            id="00002"
            title="Artvibes Lazy Panda Printed Wooden Wall Hanging with Quotes for Home Decor"
            image="https://m.media-amazon.com/images/I/61wrHoxMaTL._AC_UL480_FMwebp_QL65_.jpg"
            price={1400}
            rating={5}
          />
          <Product
            id="00003"
            title="eCraftIndia Resting Buddha on Knee Metal Showpiece"
            image="https://m.media-amazon.com/images/I/51FkEHDh0IL._AC_UL480_QL65_.jpg"
            price={1899.0}
            rating={4}
          />
          
        </div>
        <div className="home_row">
          {/* Women Fashion */}
          <Product
            id="00004"
            title="OOMPH! Women's Crepe A-Line Maxi Dress"
            image="https://m.media-amazon.com/images/I/91du0WExPJL._UX679_.jpg"
            price={1999.99}
            rating={3}
          />
          <Product
            id="00005"
            title="COOL AND CASUAL
            Women's Maxi Two-Piece Dress"
            image="https://m.media-amazon.com/images/I/81tDFJQxRSL._UY741_.jpg"
            price={2999.99}
            rating={5}
          />
          <Product
            id="00006"
            title="RARE Women's Dress"
            image="https://m.media-amazon.com/images/I/713wsw3Dr6L._UX569_.jpg"
            price={999.99}
            rating={4}
          />
        </div>
        <div className="home_row">
          {/* Mens fashion */}
          <Product
            id="00007"
            title="Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (J-Mistry)"
            image="https://m.media-amazon.com/images/I/71UkW9i6uRL._UX679_.jpg"
            price={199999.99}
            rating={3}
          />
          <Product
            id="00008"
            title="Ben Martin Men's Full Sleeve Stand Collar Casual Jacket"
            image="https://m.media-amazon.com/images/I/61eMJalktNL._UY879_.jpg"
            price={2999.99}
            rating={5}
          />
          <Product
            id="00009"
            title="L'MONTE Imported Casual Cotton Cargo Fur Winter Jacket for Men"
            image="https://m.media-amazon.com/images/I/61sQSvW-7lL._UX679_.jpg"
            price={4999.99}
            rating={4}
          />
        </div>
        <div className="home_row_deals">
          <Product
            id="00010"
            title="Amayra Women's A-Line Knee Length Dress"
            image="https://m.media-amazon.com/images/I/613YnZvlm6L._UY741_.jpg"
            price={1999.99}
            rating={4}
          />
          <Product
            id="00011"
            title="Lymio Dresses for Women"
            image="https://m.media-amazon.com/images/I/7178zfQwb5L._SY741._SX._UX._SY._UY_.jpg"
            price={2999.99}
            rating={5}
          />
          <Product
            id="00012"
            title="Lymio Dresses for Women Multi Color Women Dress (522-540)"
            image="https://m.media-amazon.com/images/I/81rREZox3gL._UY879_.jpg"
            price={999.99}
            rating={3}
          />
          <Product
            id="00013"
            title=" Dresses for Women Multi Color Women Dress (522-540)"
            image="https://m.media-amazon.com/images/I/61xo-pk0r4L._UX679_.jpg"
            price={1999.99}
            rating={3}
          />
          <Product
            id="00014"
            title="FUSION BEATS Dresses for Women, Maxi Dresses for Women"
            image="https://m.media-amazon.com/images/I/61zdrYrzQvL._UX679_.jpg"
            price={2999.99}
            rating={4}
          />
          <Product
            id="00015"
            title="Women Multi Color Women Dress (522-540)"
            image="https://m.media-amazon.com/images/I/81y0qW3eUWL._UY879_.jpg"
            price={999.99}
            rating={3}
          />
          <Product
            id="00016"
            title="Multi Color Women Dress (522-540)"
            image="https://m.media-amazon.com/images/I/51EodL-ka4L._UX679_.jpg"
            price={999.99}
            rating={3}
          />
       
        </div>
        <div className="home_row">
          {/* Laptops */}
          <Product
            id="00017"
            title="ASUS TUF Gaming F15, 15.6(39.62 cms) FHD 144Hz, Intel Core i7-11800H"
            image="https://m.media-amazon.com/images/I/41LDfnScXZS._SX300_SY300_QL70_FMwebp_.jpg"
            price={79999.99}
            rating={3}
          />
          <Product
            id="00018"
            title="ASUS Vivobook S 15 2022, Intel Core i5-12500H 12th Gen,"
            image="https://m.media-amazon.com/images/I/41dgJ2fYRML._SX300_SY300_QL70_FMwebp_.jpg"
            price={89999.99}
            rating={5}
          />
          <Product
            id="00019"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://m.media-amazon.com/images/I/81GrVUQxrXL._SX679_.jpg"
            price={69999.99}
            rating={4}
          />
        </div>
        <div className="home_row">
          {/* Ipad */}
          <Product
            id="00020"
            title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)r"
            image="https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg"
            price={100999.99}
            rating={4}
          />
          <Product
            id="00021"
            title="Apple 2022 11-inch iPad Pro "
            image="https://m.media-amazon.com/images/I/41Z2qXLp+lL._SX342_SY445_.jpg"
            price={99999.99}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="00022"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            price={89999.98}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
