import React, { useState } from 'react'

const StudentForm = (props) => {

    let [studentFormData, setStudentFormData] = useState({
        name: "",
        roll: "",
        class: "",
        note: "",
        phone: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target

        setStudentFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

const handleSubmit = (e) => {

    e.preventDefault()

    try {

        props.addStudent(studentFormData)

        setStudentFormData({
            name: "",
            roll: "",
            class: "",
            note: "",
            phone: ""
        })

    } catch (err) {

    }
}

    return (
        <div className='m-10 p-10 '>
            <form onSubmit={handleSubmit} className='grid grid-cols-3 grid-row-3 gap-10 bg-red'>
                <input onChange={handleChange} value={studentFormData.name} name='name' type="text" placeholder='name' className='bg-red-500' />
                <input onChange={handleChange} value={studentFormData.roll} name='roll' type="text" placeholder='roll no' className='bg-yellow-200' />
                <input onChange={handleChange} value={studentFormData.class} name='class' type="text" placeholder='class' className='bg-green-200' />
                <input onChange={handleChange} value={studentFormData.note} name='note' type="text" placeholder='note' className='bg-blue-200' />
                <input onChange={handleChange} value={studentFormData.phone} name='phone' type="text" placeholder='phone' className='bg-purple-200' />
                <br />

                <div className="flex justify-center">

                <button type="submit"
                className="border border-gray-400 rounded-md px-5 py-2 bg-blue-500 text-white hover:bg-green-600">
                    Submit
                </button>
                    </div>
            </form>
        </div>
    )
}

export default StudentForm