import React from 'react';
import Avatar from './Avatar.module.css';

const avatar = (props) => {
  // let first = props.identity.name.first;
  // console.log(first);

  // if (props === null) {
  //   return null;
  // }

  return (
    <section>
      <div className={Avatar.wrapper}>
        <img
          className="img-fluid z-depth-2"
          src="https://res.cloudinary.com/rosco/image/upload/e_sharpen:100/e_brightness_hsb/c_crop,e_improve,g_north_west,h_1361,q_auto:best,r_5,w_1428,x_700,y_350/v1542720127/portfolio/profilepic.jpg"
          alt="Horacio Correia"
        />
        <div className={Avatar.overlay}>
          <h3></h3>
          <h6>Full Stack Developer</h6>
        </div>
      </div>
    </section>
  )
}

export default avatar;