import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { sepeteEkle , sepetSil} from "./actions/index";

const App = (props) => {
  return (
    <div className="app">
      <div className="container">
        <div className="left">
          <h2>PRODUCTS</h2>
        {props.productList.map((product) => (
            <div className="product" key={product.id}>

              <div className="image"><img src={product.image} alt={product.name} /></div>

              <div className="product-name"><h1>{product.name}</h1></div>

              <div className="product-description"><p>{product.description}</p></div>

              <div className="product-price"><h3>{product.price}$</h3></div>

              <button className="cartaddbutton" onClick={() => props.sepeteEkle(product)}>Add To Cart</button>

            </div>
        ))}
        </div>
        <div className="right">
        <h2>CART</h2>
        
          {props.cart.map((product) => (
            <div className="productcart" key={product.id}>

              <div className="image"><img src={product.image} alt={product.name} /></div>

              <div className="product-name"><h1>{product.name}</h1></div>

              <div className="product-description"><p>{product.description}</p></div>

              <div className="product-price"><h3>{product.price}$</h3></div>

              <button className="cartaddbutton" onClick={() => props.sepetSil(product)}>Delete</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    cart: state.cart
  };
};

export default connect(mapStateToProps, { sepeteEkle, sepetSil })(App);
