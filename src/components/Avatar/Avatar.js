import React from 'react';
import Avatar from './Avatar.module.css';
// import axios from 'axios';

const avatar = (props) => {

  // state = {
  //   identity: null,
  //   role: null,
  // }

  // componentDidMount() {

  //   // http://localhost:8080
  //   // http://192.168.1.73:8080
  //   axios.get('http://localhost:8080/identities')
  //     .then(response => {
  //       let result = response.data.filter(identity => identity.id === 1);
  //       this.setState({ identity: result });
  //     });

  //   // http://localhost:8080
  //   // http://192.168.1.73:8080
  //   axios.get('http://localhost:8080/roles')
  //     .then(response => {
  //       let result = response.data.filter(role => role.id === 2);
  //       this.setState({ role: result });
  //     });
  // }

  // render() {

  //   if (this.state.identity === null || this.state.role === null) {
  //     return null;
  //   }

  //   console.log(this.state.identity['0']);
  //   const { 0: { name: { first, last } } } = this.state.identity;
  //   console.log(first, last);

  //   console.log(this.state.role['0']);
  //   const { 0: { roleCategory: { name: category }, roleSubCategory: { name: subCategory } } } = this.state.role;
  //   console.log(category, subCategory);

    return (
      <section>
        <div className={Avatar.wrapper}>
          <img
            className="img-fluid z-depth-2"
            src="https://res.cloudinary.com/rosco/image/upload/e_sharpen:100/e_brightness_hsb/c_crop,e_improve,g_north_west,h_1361,q_auto:best,r_5,w_1428,x_700,y_350/v1542720127/portfolio/profilepic.jpg"
            alt="Horacio Correia"
          />
          <div className={Avatar.overlay}>
            <h3>{props.identity.name.first} {props.identity.name.last}</h3>
            <h6>{props.role.roleSubCategory.name} {props.role.roleCategory.name}</h6>
          </div>
        </div>
      </section>
    )
  };

// }

export default avatar;