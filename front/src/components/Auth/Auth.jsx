import React, { useRef, useState } from "react";
import { auth } from '../../firebase';
import { Redirect } from 'react-router'


const Register = () => {

  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)


  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value,
    ).then(user => {
      setRedirect(true)
    }).catch(err => console.log(err))
  };

  const login = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    ).then(user => {
      setRedirect(true)
    }).catch(err => {
      setError(true)
      let error = err.message
      let filteredErr = error.replace("Firebase: ", "");
      setError(filteredErr)
    })
  };

  return (
    <>
      {redirect === true ? <Redirect to='/'/>:''}
      <section className='authBox'>
        {error !== null ? <div className='errorBox'>
          <h2>{error} </h2>
        </div> : null}
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
    </>
  );
};

export default Register;
