import React from 'react'
import propTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Video from '../Video/Video'
import Hashtag from '../Hashtag/Hashtag'
import InfoIcon from '../InfoIcon/InfoIcon'
import AvatarLink from '../AvatarLink/AvatarLink'
import getPostParameters from '../../helpers/getPostParameters'

const Post = function (properties) {
  const {
    video,
    text,
    author,
    stats,
    challenges,
    onAvatarClick,
  } = properties

  if (!video) return <></>;

  const { diggCount, commentCount } = stats
  const postStyles = getPostParameters()

  return (
    <div className="post-container" style={postStyles}>
      <Video {...video} videoUrl={video.playAddr} playOnView />
      <div className="post-info-container">
        {author && (
        <AvatarLink
          {...author}
          avatar={author.avatarThumb}
          onClickHandler={onAvatarClick}
        />
        )}

        <hr className="post-divider" />
        <Typography
          variant="body1"
          component="div"
          className="post-text"
        >
          {text}
        </Typography>
        <div className="post-hashtags">
          {challenges.map(({ id, title }) => (
            <Hashtag name={title} key={id} />
          ))}
        </div>

        <hr className="post-divider" />
        <div className="post-reactions">
          <InfoIcon number={diggCount} />
          <InfoIcon
            icon="forum"
            color="primary"
            number={commentCount}
          />
        </div>
      </div>
    </div>
  )
}

Post.defaultProps = {
  challenges: [],
  stats: {
    diggCount: 0,
    commentCount: 0,
  },
  video: undefined,
  author: undefined,
  text: undefined,
  onAvatarClick: () => 0,
}

Post.propTypes = {
  video: propTypes.shape({
    duration: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    playAddr: propTypes.string,
  }),
  author: propTypes.objectOf(AvatarLink),
  text: propTypes.string,
  stats: propTypes.shape({
    diggCount: propTypes.number,
    commentCount: propTypes.number,
  }),
  challenges: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
    }),
  ),
  onAvatarClick: propTypes.func,
}

export default Post
