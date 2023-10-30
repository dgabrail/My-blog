import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { PostRequest, PostType } from '../../types';
import './Add.css';

const Add = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [contentNumber, setContentNumber] = useState(0)
  const [newPost, setNewPost] = useState<PostType>({
    body: '',
    data: JSON.stringify(Math.floor(Math.random() * 30 + 1)),
    id: '',
    title: '',
  })

  const createNewPost = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const submitNewPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const postsRequest: PostRequest = {
      postType: newPost,
    }
    if (params.id === undefined) {
      await axiosApi.post('posts.json', postsRequest);
      navigate('/');
    } else {
      await axiosApi.put('posts/' + params.id + '.json', postsRequest);
      navigate('/');
    }
  };

  if (params.id !== undefined) {
    const contentPost = async () => {
      const content: PostType = await (await axiosApi('posts/' + params.id + '/postType.json')).data;
      setNewPost(prev => ({
        ...prev,
        body: content.body,
        title: content.title,
      }))
    }

    if (contentNumber === 0) {
      contentPost();
      setContentNumber(1);
    }
  };

  return (
    <div className='Add'>
      <form onSubmit={submitNewPost}>
        <div className="form-group">
          <label>title</label>
          <input value={newPost.title} onChange={(e) => createNewPost(e)} name='title' type="text" className='form-control' />
        </div>
        <div className="form-group">
          <label>description</label>
          <textarea value={newPost.body} onChange={(e) => createNewPost(e)} name='body' className="form-control" rows={3}></textarea>
          <button className='btn btn-success' type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Add
