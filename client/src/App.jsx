import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import About from './Pages/About'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import SignUp from './Pages/signUp'
import Search from "./Pages/Search"
import Projects from "./Pages/Projects"
import PostPages from "./Pages/PostPages"
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <>
    <BrowserRouter>
    {/*   <ScrollToTop /> */}
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
