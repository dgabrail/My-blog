import React, { useState } from 'react'
import axiosApi from '../../AxiosApi'
import { Post } from '../../types'

const Home = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [response , setResponse] = useState(null)
  const requestPosts = async () => {
    const request = await axiosApi.get('/orders.json')
    setPosts(request.data)
    setResponse((
      <Post
    ))
  }

  return (
    <div>
      Home
    </div>
  )
}

export default Home
