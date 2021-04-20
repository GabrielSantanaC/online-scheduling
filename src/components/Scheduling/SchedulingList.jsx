import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from '../../utils/api';

function SchedulingList() {
  const [schedules, setSchedules] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/scheduling');
      setSchedules(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = async ({ id }) => {
    const newsSchedules = schedules.filter((schedule) => schedule.id !== id);
    try {
      await axios.delete(`/scheduling/${id}`);
      setSchedules(newsSchedules);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th width="60%">Patient</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{schedule.name}</td>
              <td>{schedule.birth}</td>
              <td>
                <Button className="mr-2" type="button">Edit Note</Button>
                <Button variant="danger" onClick={() => handleRemove(schedule)} type="button">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SchedulingList;
