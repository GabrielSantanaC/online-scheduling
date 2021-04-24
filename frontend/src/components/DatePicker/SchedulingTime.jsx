/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import DateView from 'react-datepicker';
import axios from '../../utils/api';

function SchedulingTime({
  label, name, datescheduling,
}) {
  let excludeTime = [];
  const fetchData = async () => {
    try {
      const response = await axios.get('/scheduling');
      // eslint-disable-next-line max-len
      const date = response.data.filter((schedule) => new Date(schedule.dateScheduling).toLocaleString() === new Date(datescheduling).toLocaleString());
      const time = date.map((_time) => new Date(_time.timeScheduling).getHours());
      excludeTime = time;
      console.log(excludeTime);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field className="form-control" name={name}>
        {
          ({ form, field }) => {
            fetchData();
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DateView
                id={name}
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                showTimeSelect
                excludeTimes={excludeTime.map((t) => (
                  setHours(setMinutes(new Date(), 0), t)
                ))}
                dateFormat="h:mm aa"
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(new Date(), 17)}
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
