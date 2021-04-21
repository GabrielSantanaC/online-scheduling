/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';

function index({ label, name, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name}>{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
    </div>
  );
}

export default index;
