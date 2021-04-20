/* eslint-disable no-shadow */
import React, { useState } from 'react';
import addDays from 'date-fns/addDays';

import DatePicker from 'react-datepicker';

export default function TableDatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      maxDate={addDays(new Date(), 0)}
    />
  );
}
