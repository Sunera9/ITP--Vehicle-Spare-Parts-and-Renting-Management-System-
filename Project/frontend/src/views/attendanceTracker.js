import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './employee-dashboardcopy1.css'

const MarkAttendance = ({ id }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMarkAttendance = () => {
    setIsSubmitting(true);

    axios
      .post(`http://localhost:5000/api/employees/attendance/${id}`)
      .then((res) => {
        console.log('Mark attendance response:', res.data);
        toast.success(res.data.message); // Display success message as a toast notification
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Mark attendance error:', error);
        toast.error('Failed to mark attendance'); // Display error message as a toast notification
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <button className='attendanceButton' onClick={handleMarkAttendance} disabled={isSubmitting}>
        {isSubmitting ? 'Marking Attendance...' : 'Mark Attendance'}
      </button>
    </div>
  );
};

export default MarkAttendance;
