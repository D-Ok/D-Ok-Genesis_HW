import React, { useEffect, useState } from 'react'
import './index.css'
import {
  MemoryRouter, Route, Routes, useNavigate,
} from 'react-router-dom'
import MenuBar from '../components/MenuBar/MenuBar'

import Trending from '../pages/Trending/Trending'
import UserDetails from '../pages/UserDetails/UserDetails'
import { GLOBAL_CONSTANTS } from '../assets/constants'
import userBaseInfoMapper from '../services/userBaseInfoMapper'

const defaultUser = GLOBAL_CONSTANTS.DEFAULT_USER_ID

const App = function () {
  const navigate = useNavigate()
  const [currentUserInfo, setCurrentUserInfo] = useState()

  useEffect(() => {
    userBaseInfoMapper(defaultUser, setCurrentUserInfo)
  }, [])

  const onNavigateToUserHandler = (name) => navigate(`/user/${name}`, { replace: true })
  const navigateToMainPage = () => navigate('/', { replace: true })

  return (
    <MemoryRouter>
      <div className="App">
        <MenuBar
          user={currentUserInfo}
          onTitleClick={navigateToMainPage}
          onAvatarClick={onNavigateToUserHandler}
        />
        <Routes>
          <Route path="/" element={<Trending onNavigateToUser={onNavigateToUserHandler} />} />
          <Route path="/user">
            <Route path=":uniqueId" element={<UserDetails />} />
          </Route>
        </Routes>
      </div>
    </MemoryRouter>
  )
}

export default App
