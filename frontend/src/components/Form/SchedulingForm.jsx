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
  dateScheduling: null,
  timeScheduling: null,
  priority: false,
  completed: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  birth: Yup.date().required('Required').nullable(),
  dateScheduling: Yup.date().required('Required').nullable(),
  timeScheduling: Yup.date().required('Required').nullable(),
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
            <FormikControl name="birth" label="Birth Date" control="datebirth" />
          </div>

          <div>
            {formik.values.birth && <FormikControl name="dateScheduling" label="Scheduling Day" control="datescheduling" /> }
          </div>

          <div>
            {formik.values.dateScheduling && <FormikControl datescheduling={formik.values.dateScheduling} name="timeScheduling" label="Scheduling Time" control="timescheduling" /> }
          </div>

          <Button variant="secondary" className="mt-4" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default SchedulingForm;
