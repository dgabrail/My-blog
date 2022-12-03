import React, { ReactHTMLElement, useEffect, useState } from 'react'
import axiosApi from '../../AxiosApi'
import Post from '../../components/Post/Post'
import { PostRequest, PostsList, PostType } from '../../types'

const Home = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null)
  const requestPosts = async () => {
    const request = await axiosApi.get('/posts.json')
    const postsList: PostType[] = []
    const postsKey = Object.keys(request.data).map(key => {
      const post: PostRequest = request.data[key]
      postsList.push(post.postType)
    })
    setPosts(postsList)
  }

  useEffect(() => {
    requestPosts()
  } , [])

  return (
    <div>
      {posts?.map(post => (
        <Post body={post.body} title={post.title} />
      ))}
      
    </div>
  )
}

export default Home
