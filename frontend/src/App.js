import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Signup from './components/signup/Signup'
import SignIn from './components/signup/SignIn'
import Todo from './components/todo/Todo'
import { useDispatch } from 'react-redux'
import { authActions } from './store'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [])
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/logout' element={<Home/>} />
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}

export default App