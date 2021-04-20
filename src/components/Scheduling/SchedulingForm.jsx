/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import DatePicker from '../DatePicker';
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
  birth: '',
  scheuling: '',
  note: '',
  priority: false,
  completed: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
});

function SchedulingForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <Field
            className="form-control"
            id="name"
            name="name"
            type="text"
          />
          <ErrorMessage name="name">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>

        <div className="form-group">
          <label htmlFor="name">Email</label>
          <Field
            className="form-control"
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage name="email">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>

        <div className="form-group">
          <label className="mr-2" htmlFor="name">Birth Date</label>
          <br />
          <Field
            as={DatePicker}
            className="form-control"
            id="birth"
            name="birth"
            type="text"
          />
          <ErrorMessage name="birth">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>

        <Button variant="secondary" className="mt-4" type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}

export default SchedulingForm;
