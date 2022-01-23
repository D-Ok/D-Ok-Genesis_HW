import React from 'react'
import propTypes from 'prop-types'

import InfoIcon from '../InfoIcon/InfoIcon'

const StatsInfo = function ({
  followingCount,
  followerCount,
  videoCount,
  heartCount,
}) {
  return (
    <div className="profile-icon-group">
      <InfoIcon disabled number={heartCount} text="Hearts" />
      <InfoIcon
        number={videoCount}
        text="Videos"
        icon="play_circle"
        color="info"
      />
      <InfoIcon
        number={followerCount}
        text="Followers"
        icon="visibility"
        color="success"
      />
      <InfoIcon
        number={followingCount}
        text="Following"
        icon="face"
        color="default"
      />
    </div>
  )
}

StatsInfo.defaultProps = {
  followerCount: 0,
  followingCount: 0,
  heartCount: 0,
  videoCount: 0,
}

StatsInfo.propTypes = {
  followerCount: propTypes.number,
  followingCount: propTypes.number,
  heartCount: propTypes.number,
  videoCount: propTypes.number,
}

export default StatsInfo
