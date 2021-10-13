import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css'

import { auth } from './firebase'
import { DataContext } from './context/auth.context'
import './styles/styles.scss'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState(null)
  
  const [cart, setCart] = useState([])

  const authObj = {
    user, setUser, cart , setCart
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const user = {
          uid: userAuth.uid,
          emai: userAuth.email
        }
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <DataContext.Provider value={authObj}>
          <Header />
          <Main />
        </DataContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
