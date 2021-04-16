import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import axios from '../../utils/api';

const SchedulingForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birth: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post('/scheduling', values);
        alert('Sucess');
      } catch (error) {
        alert(error.message);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="mr-2">Brith Date</Form.Label>
        <Form.Control
          id="birth"
          name="birth"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birth}
        />
      </Form.Group>

      <Button disabled={!(formik.values.email.trim() && formik.values.name.trim())} variant="secondary" className="mt-4" type="submit">Submit</Button>
    </Form>
  );
};

export default SchedulingForm;
