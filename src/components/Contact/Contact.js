import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBIcon} from 'mdbreact';
import Contact from './Contact.module.css';

const contact = (props) => {

  return (
    <section>
      <h5 className={Contact.heading}>Contact</h5>
      <div className={Contact.body}>
          <p><MDBIcon far icon="envelope" fixed className="mr-2" />rmcorre@gmail.com</p>
          <p><MDBIcon icon="phone-alt" fixed className="mr-2" />91 421 3861</p>
          <p><MDBIcon icon="map-marker-alt" fixed className="mr-2" />Sao Miguel, Azores</p>
      </div>
    </section>  
  )
}

export default contact;