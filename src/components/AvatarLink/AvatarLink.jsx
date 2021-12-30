import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { Avatar, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AvatarLink = function ({
  name,
  nickName,
  avatar,
  className,
}) {
  const navigate = useNavigate()

  const avatarLinkClasses = classnames(
    { [`${className}`]: true },
    'avatar-link-container',
  )

  const avatarClickHandler = () => navigate(`/user/${name}`, { replace: true })

  return (
    <div
      className={avatarLinkClasses}
      onClick={avatarClickHandler}
    >
      <Avatar alt={nickName} src={avatar} className="avatar-icon" />
      <div className="avatar-text">
        <Link href="#" underline="hover">
          {name}
        </Link>
        <span className="avatar-nickname">{nickName}</span>
      </div>
    </div>
  )
}

AvatarLink.defaultProps = {
  className: '',
  name: '',
  nickName: '',
  avatar: '',
}

AvatarLink.propTypes = {
  name: propTypes.string,
  nickName: propTypes.string,
  avatar: propTypes.string,
  className: propTypes.string,
}

export default AvatarLink
