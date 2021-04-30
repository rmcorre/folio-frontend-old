import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdbreact";
import Contact from "./Contact.module.css";

const contact = (props) => {
  return (
    <section>
      <h4 className="sidebar_heading">Contact</h4>
      <div className={Contact.body}>
        <p>
          <MDBIcon far icon="envelope" fixed className="mr-2" />
          {props.contact.email.email}
        </p>
        <p>
          <MDBIcon icon="phone-alt" fixed className="mr-2" />
          {props.contact.phone.number}
        </p>
        <p>
          <MDBIcon icon="map-marker-alt" fixed className="mr-2" />
          {props.contact.address.island}, {props.contact.address.region}
        </p>
      </div>
    </section>
  );
};

export default contact;
