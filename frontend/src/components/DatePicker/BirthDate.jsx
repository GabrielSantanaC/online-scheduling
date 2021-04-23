/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import addDays from 'date-fns/addDays';
import DateView from 'react-datepicker';

function BirthDate({ label, name, ...rest }) {
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
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  maxDate={addDays(new Date(), 0)}
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

export default BirthDate;
