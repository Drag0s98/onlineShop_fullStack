import React, { useContext } from "react";

import { DataContext } from "../../context/auth.context";

const Cart = () => {

  const { cart, setCart } = useContext(DataContext)

  const remove = (key) => {
    const item = cart.filter((current, i) => i !== key);
    setCart(item);
  }

  return (
    <section className='cartBox' >
      {cart.map((param, i) => {
        return (
            <article className='cardBox'key={i}>
              <div className='topCard'>
                <img src={param.images} alt={param.name} />
              </div>
              <div className='midCard'>
                <h3>{param.name}</h3>
              </div>
              <div className='botCard'>
                <p className='price'>Price: {param.price}</p>
                <p>Calification: {param.relevance}</p>
              <button className='remove_btn' onClick={() => remove(i)}>Remove</button>
              </div>
            </article>
        )
      })}
      <button className='btnBuy'>Buy!</button>
    </section>

  );
};

export default Cart;
