import React from 'react'
import propTypes from 'prop-types'
import { Icon } from '@mui/material'

import Video from '../Video/Video'
import numberToText from '../../helpers/numberToText'

const VideoGrid = function ({ videos }) {
  const videoContainer = ({ video, stats: { playCount } }) => (
    <div className="user-video-container" key={video.playAddr}>
      <Video
        controls={false}
        videoUrl={video.playAddr}
        className="user-video-display"
      />
      <div className="user-video-info">
        <Icon fontSize="large">play_arrow</Icon>
        <span>{numberToText(playCount)}</span>
      </div>
    </div>
  )
  console.log(videos)
  return (
    <div className="video-grid">
      {videos.map((element) => videoContainer(element))}
    </div>
  )
}

VideoGrid.defaultProps = {
  videos: [],
}

VideoGrid.propTypes = {
  videos: propTypes.arrayOf(
    propTypes.shape({
      videoUrl: propTypes.string,
      playCount: propTypes.number,
    }),
  ),
}

export default VideoGrid
