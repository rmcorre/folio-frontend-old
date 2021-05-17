import React from 'react';
import FormModal from '../UI/FormModal';

import styles from './EditSummary.module.css';

const CreateSummaryForm = (props) => {
  return (
    <FormModal title="Edit Summary" onCancel={props.onCancel}>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="summary">Summary:</label>
          <textarea id="summary" name="summary" rows="5" />
        </div>
      </form>
    </FormModal>
  );
};

export default CreateSummaryForm;
