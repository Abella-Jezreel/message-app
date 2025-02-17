import React from 'react';
import Image2x2 from "../images/2x2.jpg";
const Friends = () => {
  return (
       <div className='friend'>
            <div className='friend-image'>
                 <div className='image'>
                 <img src={Image2x2} alt='Friend' />
                 </div>
            </div>
            <div className='friend-name-seen'>
                 <div className='friend-name'>
                      <h4>Kazi Ariyan</h4>
                 </div>
            </div>
       </div>
  )
};
export default Friends;