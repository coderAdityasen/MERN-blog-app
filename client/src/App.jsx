import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SignUp from "./Pages/SignUp"
import Signin from "./Pages/Signin"
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
    </BrowserRouter>
    </>
  )
}

export default App
