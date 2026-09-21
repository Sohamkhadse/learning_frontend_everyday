import React, { useState } from 'react'

import StudentForm from './components/StudentForm'
import DisplayGrid from './components/DisplayGrid'
import Cube from './components/Magic.jsx'
import Wrapper from './hooks/Wrapper.jsx'

const App = () => {

  let [studentData, setStudentData] = useState([])

  const addToStudentData = (student) => {
    setStudentData(prev => {
      return [...prev, student]
    })
    console.log(studentData)
  }

  return (
    <Wrapper>
      <StudentForm addStudent={addToStudentData} />
      <DisplayGrid studentData={studentData}/>
      <Cube />
    </Wrapper>
  )
}

export default App