import React, { useState } from 'react'

const form = () => {



    let [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        age: ""
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

                    <button type='submit' className='block bg-blue-400 text-white font-bold p-3 rounded'>
                        Submit
                    </button>
                </form>

            </div>



            <span class="inline-grid grid-cols-3 gap-4">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
            </span>
            <span class="inline-grid grid-cols-3 gap-4">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
            </span>


            <div class="flex ...">
                <div class="flex-1 ...">01</div>
                <div class="contents">
                    <div class="flex-1 ...">02</div>
                    <div class="flex-1 ...">03</div>
                </div>
                <div class="flex-1 ...">04</div>
            </div>

        </div>
    )
}

export default form;