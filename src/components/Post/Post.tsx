import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  title: string;
  body: string;
  id: string;
  data: string;
}

const Post: React.FC<Props> = ({ body, title, id, data }) => {
  return (
    <div style={{ border: '1px solid black', margin: '30px', textAlign: 'left' }}>
      <div style={{ margin: '10px' }}>
        <span>{data}</span>
        <h4>{title}</h4>
        <div>
          <p>{body}</p>
        </div>
        <Link to={'/posts/' + id} className='btn btn-primary'>Read more</Link>
      </div>
    </div>
  )
}

export default Post;
