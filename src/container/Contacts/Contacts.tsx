import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className='Contacts'>
      <button>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg" alt="" />
          <h3>@BLOG</h3>
        </div>
      </button>

      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/244/244812.png" alt="" />
        <h3>055357988</h3>
        <span>Our phone</span>
      </div>

      <button>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Lg0pkAA0USjzto82_Hak3PPFop0yrAC0GDyz6kYfRIaVC85QZl_kAFEr75umn2HEObA&usqp=CAU" alt="" />
          <h3>@BLOG_KG</h3>
        </div>
      </button>
    </div>
  )
}

export default Contacts;
