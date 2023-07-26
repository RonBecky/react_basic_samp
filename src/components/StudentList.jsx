import React, { useState } from "react";
import DisplayStudent from "./DisplayStudent";


const StudentList = () => {
  const [students, setStudents] = useState([]);//useState: [the name of the variable, the condition of the variable] = useState([the condition after doing an action])
  const [name, setname] = useState('')
  const [age, setage] = useState(0)

  //function for deleting students
  const handleDeleteStudent = (index) => {
    const deleteStudents = [...students];
    deleteStudents.splice(index, 1);
    setStudents(deleteStudents);
  };

  return (
    <div>
      {students.map((student, index) => (
        <DisplayStudent
          key={index}
          students={student}
          index={index}
          onDelete={handleDeleteStudent}
        />
      ))}
      <div>
        <button onClick={()=> {setStudents([...students, {sname:name, age:age}])}}>add student</button>
        Student name: <input onChange={(e) =>setname(e.target.value)}/>
        age: <input onChange={(e) =>setage(e.target.value)}/>
      </div>
    </div>
  );
};

export default StudentList;
