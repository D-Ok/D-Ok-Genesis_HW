import React from 'react'
import propTypes from 'prop-types'
import { Icon } from '@mui/material'

import Video from '../Video/Video'
import numberToText from '../../helpers/numberToText'

const VideoGridElement = function ({ playCount, videoUrl }) {
  return (
    <div className="user-video-container">
      <Video
        controls={false}
        videoUrl={videoUrl}
        className="user-video-display"
      />
      <div className="user-video-info">
        <Icon fontSize="large">play_arrow</Icon>
        <span>{numberToText(playCount)}</span>
      </div>
    </div>
  )
}

VideoGridElement.defaultProps = {
  videoUrl: '',
  playCount: 0,
}

VideoGridElement.propTypes = {
  videoUrl: propTypes.string,
  playCount: propTypes.number,
}

export default VideoGridElement
