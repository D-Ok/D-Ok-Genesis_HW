import React from 'react'
import { Link, Typography } from '@mui/material'
import propTypes from 'prop-types'
import { AvatarLink } from '@D-Ok/component-lib'

const UserInfo = function ({
  bioLink,
  uniqueId,
  nickname,
  avatarLarger,
  signature,
  navigateToUser,
}) {
  return (
    <>
      <AvatarLink
        className="profile-avatar"
        name={uniqueId}
        nickName={nickname}
        avatar={avatarLarger}
        onClickHandler={navigateToUser}
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
  navigateToUser: () => 0,
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
  navigateToUser: propTypes.func,
}

export default UserInfo
