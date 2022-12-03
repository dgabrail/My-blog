import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../AxiosApi';
import { PostRequest, PostType } from '../../types';

const Add = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<PostType>({
    body: '',
    data: '',
    title: '',
  })

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const postRequest: PostRequest = {
      postType: user
    }
    await axiosApi.post('/posts.json', postRequest)
    navigate('/')
  };
  return (
    <div>
      <form style={{ textAlign: 'left' }} onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="User-name">User name</label>
          <input
            style={{ width: '50%' }}
            id="User-name" type="text" name="title"
            className="form-control"
            value={user.title}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <input
            style={{ width: '50%' }}
            id="Description" type="text" name="body"
            className="form-control"
            value={user.body}
            onChange={change}
          />
        </div>
        <button type='submit' className='btn btn-warning mt-5'>Save</button>
      </form>
    </div>
  )
}

export default Add
