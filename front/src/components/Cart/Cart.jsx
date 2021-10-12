import React, { useContext } from "react";

import { DataContext } from "../../context/auth.context";

const Cart = () => {

  const { cart, setCart } = useContext(DataContext)

  const remove = (key) => {
    const item = cart.filter((current, i) => i !== key);
    setCart(item);
  }

  return (
    <div>
      {cart.map((param, i) => {
        return (
          <section className='cartBox' key={i}>
            <article className='cardBox'>
              <div className='topCard'>
                <img src={param.images} alt={param.name} />
              </div>
              <div className='midCard'>
                <h3>{param.name}</h3>
                <p>{param.price}</p>
              </div>
              <div className='botCard'>
                <p>Calification: {param.relevance}</p>
              </div>
              <button onClick={() => remove(i)}>Remove</button>
            </article>
            <article className='btn_buy_box'>
              <button className='btnBuy'>Buy!</button>
            </article>
          </section>
        )
      })}
    </div>

  );
};

export default Cart;
