/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Input from '../Input';
import DatePicker from '../DatePicker/DatePicker';

function FormControl({ control, ...rest }) {
  switch (control) {
    case 'input': return <Input {...rest} />;
    case 'datepicker': return <DatePicker {...rest} />;
    default: return null;
  }
}

export default FormControl;
