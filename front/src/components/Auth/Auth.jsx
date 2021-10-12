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
    <section>
      <article className='registerForm'>
        <form onSubmit={register}>
          <h1>Sign In</h1>
          <input type="email" ref={emailRef} />
          <br />
          <input type="password" ref={passRef} />
          <br />
          <button onClick={login}>Log In</button><button onClick={register}>Register</button>
        </form>
      </article>
    </section>
  );
};

export default Register;
