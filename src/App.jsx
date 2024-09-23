import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './userpage/loginpage'
import { Register } from './userpage/registerpage'
import { Home } from './userpage/homepage'
import { Userloginpage } from './userpage/userloginpage'
import { Emailverify } from './userpage/Email-verify'
import { Resetpassword } from './userpage/resetpassword'
import PropTypes from "prop-types";
function App() {
  let Privateroute = ({ component }) => {
    let isAuthenticated = Boolean(localStorage.getItem("useremail"))
    if (isAuthenticated) {
      return component
    }
    else {
      return <Navigate to='/login' />
    }
  }
  Privateroute.propTypes = {
    component: PropTypes.node
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/userpage' element={<Privateroute component={<Userloginpage />} />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verify-email' element={<Emailverify />} />
            <Route path='/reset-password' element={<Resetpassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
