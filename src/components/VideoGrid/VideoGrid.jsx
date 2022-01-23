import React from 'react'
import propTypes from 'prop-types'

import VideoGridElement from '../VideoGlidElement/VideoGrigElement'

const VideoGrid = function ({ videos }) {
  return (
    <div className="video-grid">
      {videos.map(({ video: { playAddr }, stats: { playCount } }) => (
        <VideoGridElement videoUrl={playAddr} playCount={playCount} key={playAddr} />
      ))}
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
