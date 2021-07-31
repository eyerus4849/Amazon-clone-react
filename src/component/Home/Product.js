import React from "react";
import "./product.css";
import { useStateValue } from '../StateProvider';
const ACTIONS={
  ADDTOBASKET:'ADD_TO_BASKET'
  
}
function Product({ id, title, image, price, rating }) {
  const [{ basket,user }, dispatch] = useStateValue();

    // console.log('this is the basket', basket);
  const addToBasket = () => {
    dispatch({
      type: ACTIONS.ADDTOBASKET,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <img src={image} alt="" />
      </div>
      
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
