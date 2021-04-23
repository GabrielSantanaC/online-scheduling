/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Input from '../Input';
import BirthDate from '../DatePicker/BirthDate';
import SchedulingDate from '../DatePicker/SchedulingDate';
import SchedulingTime from '../DatePicker/SchedulingTime';

function FormControl({ control, ...rest }) {
  switch (control) {
    case 'input': return <Input {...rest} />;
    case 'datebirth': return <BirthDate {...rest} />;
    case 'datescheduling': return <SchedulingDate {...rest} />;
    case 'timescheduling': return <SchedulingTime {...rest} />;
    default: return null;
  }
}

export default FormControl;
