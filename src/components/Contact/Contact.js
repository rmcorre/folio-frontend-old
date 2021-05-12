import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.css";

const contact = (props) => {
  const email = props.contact.email.email;
  const phone = props.contact.phone.number;
  const island = props.contact.address.island;
  const region = props.contact.address.region;
  const location = island + ", " + region;

  return (
    <div className={styles.wrapper}>
      <div>
        {/* <FontAwesomeIcon icon="phone-alt" fixedWidth className="mr-2" /> */}
        {phone}
      </div>
      <div>
        {/* <FontAwesomeIcon icon="map-marker-alt" fixedWidth className="mr-2" /> */}
        {location}
      </div>
      <div>
        {/* <FontAwesomeIcon icon="envelope" fixedWidth className="mr-2" /> */}
        {email}
      </div>
    </div>
  );
};

export default contact;
