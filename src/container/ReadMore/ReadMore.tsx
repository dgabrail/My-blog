import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosApi from '../../AxiosApi'
import { PostRequest, PostType } from '../../types'

const ReadMore = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [postType, setPostType] = useState<PostType>({
    body: '',
    data: '',
    title: '',
    id: '',
  })

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setPostType(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postRequest: PostRequest = {
      postType: postType
    }

    await axiosApi.put('/posts/' + params.id + '.json', postRequest)
    navigate('/')
  };

  const deletePost = async() => {
    await axiosApi.delete('/posts/' + params.id + '.json')
    navigate('/')
  }
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3>Add new post</h3>
      <form style={{ textAlign: 'left' }} onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="User-name">Title</label>
          <input
            style={{ width: '50%' }}
            id="User-name" type="text" name="title"
            className="form-control"
            value={postType.title}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <input
            style={{ width: '50%' }}
            id="Description" type="text" name="body"
            className="form-control"
            value={postType.body}
            onChange={change}
          />
        </div>
        <button style={{ marginRight: '20px' }} type='submit' className='btn btn-warning mt-5'>Save</button>
        <button onClick={deletePost} type='button' className='btn btn-success mt-5'>Delete</button>
      </form>
    </div>
  )
}

export default ReadMore
