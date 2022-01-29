import React, { useEffect, useState } from 'react'

import propTypes from 'prop-types'
import Post from '../../components/Post/Post'
import trendingFeedMapper from '../../services/trendingFeedMapper'

const Trending = function ({ onNavigateToUser }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    trendingFeedMapper(setPosts)
  }, [])

  return (
    <>
      { posts && posts.map((element) => (
        <Post
          {...element}
          key={element.id}
          onAvatarClick={onNavigateToUser}
        />
      ))}
    </>
  )
}

Trending.defaultProps = {
  onNavigateToUser: () => 0,
}

Trending.propTypes = {
  onNavigateToUser: propTypes.func,
}

export default Trending
