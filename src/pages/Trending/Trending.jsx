import React, { useEffect, useState } from 'react'

import Post from '../../components/Post/Post'
import trendingFeedMapper from '../../services/trendingFeedMapper'

const Trending = function () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    trendingFeedMapper(setPosts)
  }, [])

  return (
    <>
      { posts && posts.map((element) => (
        <Post {...element} key={element.id} />
      ))}
    </>
  )
}

export default Trending
