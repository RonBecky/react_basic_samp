import React from 'react'
import './styles/DisplayStudent.css';

const DisplayStudent = (props) => {
    const handleDelete = () => {
        props.onDelete(props.index);
      };
  return (
    <div className="display-student-container">
        <div className="student-name">{props.students.sname}</div>
        <div className="student-age">{props.students.age}</div>
        <button className="delete-button" onClick={handleDelete}>DELETE</button>
        {console.log(props)}
    </div>
  )
}

export default DisplayStudent