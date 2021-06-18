import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Card from '../UI/Card';

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className='form-label' htmlFor="firstName">First Name</label>
          <input 
            class='form-control'
            id="firstName" 
            name="firstName" 
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.firstName} 
          />
          {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="lastName">Last Name</label>
          <input
            className='form-control'
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName} 
          />
          {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="email">Email Address</label>
          <input
            className='form-control'
            id="email" 
            name="email" 
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.email} 
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default SignupForm;