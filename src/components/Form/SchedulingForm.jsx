/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form,
} from 'formik';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import FormikControl from './FormControl';
import axios from '../../utils/api';

const onSubmit = async (values, onSubmitProps) => {
  try {
    await axios.post('/scheduling', values);
    toast.info('Successfully scheduled');
    onSubmitProps.resetForm();
  } catch (error) {
    toast.error(error.message);
  }
};

const initialValues = {
  name: '',
  email: '',
  note: '',
  birth: null,
  scheduling: null,
  priority: false,
  completed: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  birth: Yup.date().required('Required').nullable(),
  scheduling: Yup.date().required('Required').nullable(),
});

function SchedulingForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formik) => (
        <Form>
          <div>
            <FormikControl name="name" label="Full Name" control="input" />
          </div>

          <div>
            <FormikControl name="email" label="Email" control="input" />
          </div>

          <div>
            <FormikControl name="birth" label="Birth Date" control="datepicker" />
          </div>

          <di>
            {formik.values.birth && <FormikControl name="scheduling" label="Choose a Date" control="datepicker" /> }
          </di>

          <Button variant="secondary" className="mt-4" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default SchedulingForm;
