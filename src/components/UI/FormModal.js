import React from 'react';

import Card from './Card';
import Button from './Button';
import styles from './FormModal.module.css';

const FormModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCancel} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.children}</div>
        <footer className={styles.actions}>
          <Button type="submit">Save</Button>
          <Button type="submit" onClick={props.onCancel}>
            Cancel
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default FormModal;
