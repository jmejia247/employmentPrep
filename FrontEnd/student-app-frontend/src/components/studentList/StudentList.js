import React, {useEffect, useState} from 'react';

import SingleTextInput from '../singleTextInput/SingleTextInput';
import StudentCard from '../studentCard/StudentCard';

import './StudentList.scss';

const StudentList = () => {

    // hooks
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // functions

    useEffect(() => {

        const url = 'http://localhost:8080/students';
        // reach out to the backend
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setStudents(data);
        })
        // get our students
        // update our students hook with the new data

    }, []); // empty array means run on mount


    // when search term is updated, this component will rerender 
    // what to do on a re-render? 
    let filteredStudents = students;

    if(searchTerm){
        filteredStudents = students.filter(student => {
            const fullName = `${student.firstName} ${student.lastName}`;
            
            const fullNameToLowerCase = fullName.toLowerCase();

            const searchTermToLowerCase = searchTerm.toLowerCase();

            return fullNameToLowerCase.includes(searchTermToLowerCase);
        });
    }


    // return or JSX
    return (
        <div className="studentList">
          <SingleTextInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           {filteredStudents.map((student) => {
            return (
                <StudentCard student={student} key={student.id} />
            )
           })}

           {filteredStudents.length == 0 && <div className="studentList__noResults">No Results </div>}
        </div>
    )


}

export default StudentList;