import React from 'react'
import { useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'

import {
  AppBar, Avatar, IconButton, Toolbar, Typography,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'

const MenuBar = function ({ user }) {
  const navigate = useNavigate()

  const navigateToMainPage = () => navigate('/', { replace: true })
  const navigateToUserPage = () => user && user.userName && navigate(`/user/${user.userName}`, { replace: true })

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
            {user ? (
              <Avatar alt={user.userName} src={user.avatar} />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

MenuBar.defaultProps = {
  user: undefined,
}

MenuBar.propTypes = {
  user: propTypes.shape({
    userName: propTypes.string,
    avatar: propTypes.string,
  }),
}

export default MenuBar