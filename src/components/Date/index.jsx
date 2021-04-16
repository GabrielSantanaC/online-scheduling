/* eslint-disable no-shadow */
import React, { useState } from 'react';
import addDays from 'date-fns/addDays';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TableDatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      minDate={(new Date())}
      maxDate={addDays(new Date(), 14)}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      selected={date}
      onChange={(date) => setDate(date)}
    />
  );
}
