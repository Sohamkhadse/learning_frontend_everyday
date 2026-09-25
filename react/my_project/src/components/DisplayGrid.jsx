import React, { useContext } from 'react'
import { StudentContext } from '../hooks/Wrapper.jsx'

const DisplayGrid = () => {

    let student = useContext(StudentContext)

    return (
        <div>

            <h2>Student List</h2>

            {student.studentData.map((student, index) => {

                return (
                    <div key={index}>

                       <p>Name: {student.name}</p>
                        <p>Roll: {student.roll}</p>
                        <p>Class: {student.class}</p>
                        <p>Note: {student.note}</p>
                        <p>Phone: {student.phone}</p>

                    </div>
                )

            })}

        </div>
    )
}

export default DisplayGrid