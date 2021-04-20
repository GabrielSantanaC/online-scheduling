import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import Modal from '../Modal';
import axios from '../../utils/api';

function SchedulingList() {
  const [schedules, setSchedules] = useState([]);
  const [editSchedule, setEditSchedule] = useState({});
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

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
    const newSchedules = schedules.filter((schedule) => schedule.id !== id);
    try {
      await axios.delete(`/scheduling/${id}`);
      setSchedules(newSchedules);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleChecked = async (event, _schedule) => {
    const { checked: completed } = event.target;

    const newSchedules = schedules.map((schedule) => {
      if (schedule.id === _schedule.id) {
        return {
          ...schedule,
          completed,
        };
      }

      return schedule;
    });
    try {
      await axios.put(`/scheduling/${_schedule.id}`, { ..._schedule, completed });
      setSchedules(newSchedules);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleEdit = (schedule) => {
    setEditSchedule(schedule);
    setText(schedule?.note); // Opitional Chaining ?
    setShowModal(!showModal);
  };

  const onEditNote = async () => {
    const newSchedules = schedules.map((schedule) => {
      if (schedule.id === editSchedule.id) {
        return {
          ...schedule,
          note: text,
        };
      }
      return schedule;
    });
    try {
      await axios.put(`/scheduling/${editSchedule.id}`, { ...editSchedule, note: text });
      setSchedules(newSchedules);
      handleEdit();
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th width="35%">Patient</th>
            <th>Age</th>
            <th width="25%">Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>
                <input
                  checked={schedule.completed}
                  onChange={(event) => handleChecked(event, schedule)}
                  type="checkbox"
                />
              </td>
              <td>{schedule.name}</td>
              <td>{schedule.birth}</td>
              <td>{schedule.note}</td>
              <td>
                <Button className="mr-2" onClick={() => handleEdit(schedule)} type="button">{schedule.note ? 'Edit Note' : 'Add Note'}</Button>
                <Button variant="danger" onClick={() => handleRemove(schedule)} type="button">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        onSubmit={onEditNote}
        show={showModal}
        toggle={() => handleEdit()}
        title={editSchedule?.name}
      >
        <Form.Group>
          <Form.Label>Note name</Form.Label>
          <Form.Control
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </Form.Group>
      </Modal>
    </div>
  );
}

export default SchedulingList;
