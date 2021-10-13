import React, { useRef } from "react";
import { auth } from '../../firebase';



const Register = () => {

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value,
    ).then(user => {
      console.log(user);
    }).catch(err => console.log(err))
  };

  const login = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    ).then(user => {
      console.log(user);
    }).catch(err => console.log(err))
  };

  return (
    <section className='authBox'>
      <article className='registerForm'>
        <form onSubmit={register} className='authForm'>
          <h1>Sign In</h1>
          <input type="email" ref={emailRef} placeholder='email@email.com' />
          <input type="password" ref={passRef} placeholder='******' />
          <button onClick={login} className='logIn_btn'>Log In</button>
          <p className='registerText'>You are not register?</p>
          <button onClick={register} className='register_btn'>Register</button>
          
        </form>
      </article>
    </section>
  );
};

export default Register;
