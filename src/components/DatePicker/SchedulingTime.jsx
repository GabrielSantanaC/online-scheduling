/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';

function SchedulingTime({
  label, name, datescheduling, ...rest
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field className="form-control" name={name}>
        {
            ({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  selected={value}
                  onChange={(val) => setFieldValue(name, val)}
                />
              );
            }
        }
      </Field>
      <ErrorMessage name={name}>{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
    </div>
  );
}

export default SchedulingTime;
