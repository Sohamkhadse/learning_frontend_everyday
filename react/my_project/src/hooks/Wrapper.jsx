import React, { createContext, useState } from 'react'

export const StudentContext = createContext()

export const useStudent = () => {

    let [studentData, setStudentData] = useState([])

    const addToStudentData = (student) => {
        setStudentData(prev => {
            return [...prev, student]
        })
    }

    return {
        studentData,
        addToStudentData
    }
}

const Wrapper = ({ children }) => {

    let student = useStudent()

    return (
        <StudentContext.Provider value={student}>
            {children}
        </StudentContext.Provider>
    )
}

export default Wrapper