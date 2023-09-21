import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    
    const apiUrl = 'http://127.0.0.1:8000/teacher/';

    
    axios.get(apiUrl)
      .then(response => {
        
        setTeachers(response.data.teachers);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>{teachers.length > 0 ? teachers[0].heading : 'Teacher List'}</h1>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.id}>
            Name: {teacher.name}<br />
            Address: {teacher.address}<br />
            Phone: {teacher.phone}<br />
            Email: {teacher.email}<br />
            Date of Birth: {teacher.dob}<br />
            Qualification: {teacher.qualification}<br />
            Last Updated: {teacher.last_updated_time}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
