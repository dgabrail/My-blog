import React from 'react'
import { json } from 'stream/consumers';
interface Props {
  title: string;
  body: string;
}

const Post: React.FC<Props> = ({ body, title }) => {
  const data = JSON.stringify(Math.floor(Math.random() * 30 + 1))
  return (
    <div style={{ border: '1px solid black', margin: '30px', textAlign: 'left' }}>
      <div style={{ margin: '10px' }}>
        <span>{data + ' ' + data + ' ' + 2022}</span>
        <h4>{title}</h4>
        <div>
          <p>{body}</p>
        </div>
        <button className='btn btn-primary'>Read more</button>
      </div>
    </div>
  )
}

export default Post
