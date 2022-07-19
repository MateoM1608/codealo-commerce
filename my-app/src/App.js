import React, {useState, useEffect}from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { GetCarById } from './redux/action/index'
import Home from './pages/Home'
import Products from './pages/Products';
import DetailProducts from './pages/DetailProducts';
import Purchase from './pages/Purchase';
import HistoryShopping from './pages/HistoryShopping'
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ModalLogOut from './components/ModalLogOut'
import Thanks from './pages/Thanks';



function App() {

  const dispatch = useDispatch()
  const [ isOpenLogin, setIsOpenLogin ] = useState(false)
  const [ isOpenSignUp, setIsOpenSignUp ] = useState(false)
  const [ isOpenLogOut, setIsOpenLogOut ] = useState(false)
  const userSignIn = useSelector((state) => state.userSignIn);
  
  const { userInfo } = userSignIn;

  const toggleModalLogin = () =>{
    setIsOpenLogin(!isOpenLogin)
  }

  const toggleModalSignUp = () => {
    setIsOpenSignUp(!isOpenSignUp)
  }

  const toggleModalLogOut = () => {
    setIsOpenLogOut(!isOpenLogOut)
  }

  useEffect(() => {
    if(userInfo){
        dispatch(GetCarById(userInfo.user.id))
    }
  },[])


  return (
    <div  className='body_app'>
      <Navbar
        toggleModalSignUp={toggleModalSignUp}
        toggleModalLogin={toggleModalLogin}
        toggleModalLogOut={toggleModalLogOut}
        userInfo={userInfo}
      />
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/productos" element={<Products/>}/>
        <Route exact path="/productos/:slug" element={<DetailProducts/>}/>
        <Route exact path="/comprar" element={<Purchase/>}/>
        <Route exact path="/compras" element={<HistoryShopping />} />
        <Route exact path="/gracias" element={<Thanks />} />

      </Routes>

      <LogIn 
        toggleModalLogin={toggleModalLogin}
        isOpenLogin={isOpenLogin}
      />
      <SignUp 
        toggleModalSignUp={toggleModalSignUp}
        isOpenSignUp={isOpenSignUp}
      />
      <ModalLogOut 
        toggleModalLogOut={toggleModalLogOut}
        isOpenLogOut={isOpenLogOut}
      />
    </ div>
  );
}

export default App;
