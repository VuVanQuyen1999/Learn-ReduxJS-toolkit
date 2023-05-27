import React from 'react'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

const Blog = () => {
  return (
    <div className='b-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}

export default Blog
