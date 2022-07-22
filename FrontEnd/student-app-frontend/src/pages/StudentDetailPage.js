import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";

import StudentCard from '../components/studentCard/StudentCard';

function StudentDetailPage(props) {

    let params = useParams();
    const location = useLocation();
    const [student, setStudent] = useState({});


    useEffect(() => {
        if(location.state?.student){
            setStudent(location.state?.student  )
        } else {
            
            const singleStudentURL =`https://student-app-backend-june.herokuapp.com/students/${studentId}`; 

            fetch(singleStudentURL)
                .then(response => response.json())
                .then(data => {
                    setStudent(data);
                })
        }

    }, []);
    
    const studentId = params.studentId;

    // with the student Id, we can fetch student info
    // from our API


    return (
        <div className="studentDetailPage">
           {Object.keys(student).length > 0 && <StudentCard student={student} />}
        </div>
    );
}

export default StudentDetailPage;