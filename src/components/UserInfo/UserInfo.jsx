import React from 'react'
import { Link, Typography } from '@mui/material'
import propTypes from 'prop-types'
import AvatarLink from '../AvatarLink/AvatarLink'

const UserInfo = function ({
  bioLink,
  uniqueId,
  nickname,
  avatarLarger,
  signature,
}) {
  return (
    <>
      <AvatarLink
        className="profile-avatar"
        name={uniqueId}
        nickName={nickname}
        avatar={avatarLarger}
      />
      <Typography variant="body1" component="p">
        {signature}
      </Typography>
      {bioLink && <Link href={bioLink.link}>{bioLink.link}</Link>}
    </>
  )
}

UserInfo.defaultProps = {
  avatarLarger: '',
  bioLink: undefined,
  nickname: '',
  uniqueId: '',
  signature: '',
}

UserInfo.propTypes = {
  avatarLarger: propTypes.string,
  bioLink: propTypes.shape({
    link: propTypes.string,
    risk: propTypes.number,
  }),
  nickname: propTypes.string,
  uniqueId: propTypes.string,
  signature: propTypes.string,
}

export default UserInfo
