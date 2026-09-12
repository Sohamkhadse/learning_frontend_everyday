import React, { useState } from 'react'

const form = () => {

    let [formData, setFormData] = useState({

        name: "",
        phone: "",
        email: "",
        age: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        password: "",
    })

    const handleSubmit = (e) => {

        e.preventDefault()

        console.log(formData)

    }

    const handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value

        console.log(name, value)

        setFormData((prev) => {

            return { ...prev, [name]: value }

        })

    }

    return (

        <div>

            <div className='p-20'>

                <form onSubmit={handleSubmit}>

                    <input value={formData.name} onChange={handleChange} className='p-2 border' name='name' placeholder='name' type="text" />

                    <input value={formData.email} onChange={handleChange} className='p-2 border' name='email' placeholder='email' type="email" />

                    <input value={formData.phone} onChange={handleChange} className='p-2 border' name='phone' placeholder='phone' type="text" />

                    <input value={formData.age} onChange={handleChange} className='p-2 border' name='age' placeholder='age' type="number" />

                    <input value={formData.dob} onChange={handleChange} className='p-2 border' name='dob' type="date" />

                    <select value={formData.gender} onChange={handleChange} className='p-2 border' name='gender'>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <input value={formData.address} onChange={handleChange} className='p-2 border' name='address' placeholder='address' type="text" />

                    <input value={formData.city} onChange={handleChange} className='p-2 border' name='city' placeholder='city' type="text" />

                    <input value={formData.state} onChange={handleChange} className='p-2 border' name='state' placeholder='state' type="text" />

                    <input value={formData.pincode} onChange={handleChange} className='p-2 border' name='pincode' placeholder='pincode' type="number" />

                    <input value={formData.password} onChange={handleChange} className='p-2 border' name='password' placeholder='password' type="password" />

                    <button type='submit' className='block bg-blue-400 text-white font-bold p-3 rounded'>

                        Submit

                    </button>

                </form>

            </div>


            <span className="inline-grid grid-cols-3 gap-4">

                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>

            </span>


            <span className="inline-grid grid-cols-3 gap-4">

                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>

            </span>


            <div className="flex ...">

                <div className="flex-1 ...">01</div>

                <div className="contents">

                    <div className="flex-1 ...">02</div>

                    <div className="flex-1 ...">03</div>

                </div>

                <div className="flex-1 ...">04</div>

            </div>

        </div>

    )

}

export default form