import React, { useState } from 'react';
import EditSummaryForm from './EditSummaryForm';
import EditIcon from '../UI/EditIcon';
import styles from './Summary.module.css';

const Summary = (props) => {
  const summary = props.summary.summary;

  const [show, setShow] = useState(false);

  const onEditHandler = (event) => {
    setShow(true);
    console.log('Edit clicked!');
  };

  const onCancelHandler = () => {
    setShow(false);
  };

  return (
    <>
      {show && <EditSummaryForm onCancel={onCancelHandler} />}
      <section className={styles.wrapper}>
        <h4>
          About Me <EditIcon onClick={onEditHandler} />
        </h4>
        <p>{summary}</p>
      </section>
    </>
  );
};

export default Summary;
