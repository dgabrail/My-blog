import React, { useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import Post from '../../components/Post/Post';
import { PostType } from '../../types';

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const requestPosts = async () => {
    const responsePosts = await (await axiosApi.get('/posts.json')).data;
    for (let postId in responsePosts) {
      const post: PostType = await (await axiosApi.get('/posts/' + postId + '/postType.json')).data;
      post.id = postId;
      setPosts(prev => [...prev, post]);
    }
  };


  useEffect(() => {
    requestPosts();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} data={post.data} body={post.body} id={post.id} title={post.title} />
      ))}
    </div>
  )
}

export default Home;
