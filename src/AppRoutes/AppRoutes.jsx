import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterationAndLogin from '../RegisterationAndLogin/RegisterationAndLogin'
import Home from '../Home/Home'
import { auth } from '../Firebase/Firebase'
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<RegisterationAndLogin />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes