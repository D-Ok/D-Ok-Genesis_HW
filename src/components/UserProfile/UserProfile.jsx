import React from 'react'
import propTypes from 'prop-types'

import UserInfo from '../UserInfo/UserInfo'
import StatsInfo from '../StatsInfo/StatsInfo'

const UserProfile = function ({ stats, user }) {
  return (
    <div>
      {user && <UserInfo {...user} />}
      {stats && <StatsInfo {...stats} />}
    </div>
  )
}

UserProfile.defaultProps = {
  stats: undefined,
  user: undefined,
}

UserProfile.propTypes = {
  stats: propTypes.shape({
    diggCount: propTypes.number,
    followerCount: propTypes.number,
    followingCount: propTypes.number,
    heartCount: propTypes.number,
    videoCount: propTypes.number,
  }),
  user: propTypes.shape({
    avatarLarger: propTypes.string,
    avatarMedium: propTypes.string,
    avatarThumb: propTypes.string,
    bioLink: propTypes.shape({
      link: propTypes.string,
      risk: propTypes.number,
    }),
    id: propTypes.string,
    nickname: propTypes.string,
    uniqueId: propTypes.string,
    verified: propTypes.bool,
    signature: propTypes.string,
  }),
}

export default UserProfile
