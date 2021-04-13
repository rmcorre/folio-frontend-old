import React, { Component } from 'react';
import Avatar from './Avatar.module.css';
import axios from 'axios';

class avatar extends Component {

  state = {
    identity: null,
    roles: null,
  }

  componentDidMount() {

    console.log("Component did mount");

    // http://localhost:8080
    // http://192.168.1.73:8080
    axios.get('http://localhost:8080/identities')
      .then(response => {
        const result = response.data.filter(identity => identity.id === 1);
        this.setState({ identitiy: result });
      });

    // http://localhost:8080
    // http://192.168.1.73:8080
    axios.get('http://localhost:8080/roles')
      .then(response => {
        this.setState({ roles: response.data });
      });
  }

  render() {

    console.log('Inital render');

    if (this.state.identity === null || this.state.roles === null) {
      return null;
    }

    // let identity = this.state.identities.filter(identity => identity.id === 1);
    // console.log(identity);

    const {name: {first, last}} = this.state.identity;
    console.log(first, last);

    let role = this.state.roles.filter(role => role.id === 2);
    console.log(role);

    return (
      <section>
        <div className={Avatar.wrapper}>
          <img
            className="img-fluid z-depth-2"
            src="https://res.cloudinary.com/rosco/image/upload/e_sharpen:100/e_brightness_hsb/c_crop,e_improve,g_north_west,h_1361,q_auto:best,r_5,w_1428,x_700,y_350/v1542720127/portfolio/profilepic.jpg"
            alt="Horacio Correia"
          />
          <div className={Avatar.overlay}>
            <h3>{first} {last}</h3>
            {/* <h6>{role[0].roleSubCategory.name} {role[0].roleCategory.name}</h6> */}
          </div>
        </div>
      </section>
    )
  };

}

export default avatar;