import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { PostType } from '../../types';
import './ViewPost.css';

const ViewPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [postValue, setPostValue] = useState<PostType>({
    body: '',
    data: '',
    id: '',
    title: '',
  })

  const value = async () => {
    const viewPostValue: PostType = await (await axiosApi('posts/' + params.id + '/postType.json')).data;
    setPostValue(prev => ({
      ...prev,
      body: viewPostValue.body,
      data: viewPostValue.data,
      title: viewPostValue.title,
    }))
  };

  value();
  const deletePost = async () => {
    await axiosApi.delete('posts/' + params.id + '.json');
    navigate('/');
  };

  return (
    <div className='View-post'>
      <span>Data</span>
      <div>{postValue.data}</div>
      <span>Title</span>
      <div>{postValue.title}</div>
      <span>Body</span>
      <div>{postValue.body}</div>
      <Link to={'/posts/' + params.id + '/edit'}><button className='btn btn-primary'>Read more</button></Link>
      <button className='btn btn-warning' onClick={deletePost}>Delete</button>
    </div>
  )
}

export default ViewPost;
