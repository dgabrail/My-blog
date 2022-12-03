import React from 'react'
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';
interface Props {
  title: string;
  body: string;
  id: string
}

const Post: React.FC<Props> = ({ body, title , id}) => {
  const data = JSON.stringify(Math.floor(Math.random() * 30 + 1))
  return (
    <div style={{ border: '1px solid black', margin: '30px', textAlign: 'left' }}>
      <div style={{ margin: '10px' }}>
        <span>{data + ' ' + data + ' ' + 2022}</span>
        <h4>{title}</h4>
        <div>
          <p>{body}</p>
        </div>
        <Link to={'/posts/' + id} className='btn btn-primary'>Read more</Link>
      </div>
    </div>
  )
}

export default Post
