import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {
  AppBar, Avatar, IconButton, Toolbar, Typography,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'

import { GLOBAL_CONSTANTS } from '../../constants'
import { options } from '../../requests'

const userInfoUrl = GLOBAL_CONSTANTS.API.URLS.USER_INFO

const MenuBar = function () {
  const navigate = useNavigate()
  const [userAvatar, setUserAvatar] = useState('')

  const defaultUser = GLOBAL_CONSTANTS.USER_ID

  useEffect(() => {
    axios
      .request(options(userInfoUrl + defaultUser))
      .then(({ data }) => {
        setUserAvatar(data.user.avatarThumb)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const navigateToMainPage = () => navigate('/', { replace: true })
  const navigateToUserPage = () => navigate(`/user/${defaultUser}`, { replace: true })

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          onClick={navigateToMainPage}
        >
          TikTuk
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={navigateToUserPage}
            color="inherit"
          >
            {userAvatar ? (
              <Avatar alt={defaultUser} src={userAvatar} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar
