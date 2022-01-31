import React, { useEffect, useState } from 'react'
import './index.css'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import MenuBar from '../components/MenuBar/MenuBar'

import Trending from '../pages/Trending/Trending'
import UserDetails from '../pages/UserDetails/UserDetails'
import { GLOBAL_CONSTANTS } from '../assets/constants'
import userBaseInfoMapper from '../services/userBaseInfoMapper'

const defaultUser = GLOBAL_CONSTANTS.DEFAULT_USER_ID

const App = function () {
  const [currentUserInfo, setCurrentUserInfo] = useState()

  useEffect(() => {
    userBaseInfoMapper(defaultUser, setCurrentUserInfo)
  }, [])

  return (
    <MemoryRouter>
      <div className="App">
        <MenuBar user={currentUserInfo} />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/user">
            <Route path=":uniqueId" element={<UserDetails />} />
          </Route>
        </Routes>
      </div>
    </MemoryRouter>
  )
}

export default App
