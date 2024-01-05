import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [showError, setShowError] = useState('')
    const [loginData, setLoginData] = useState({
        user_name: "",
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setLoginData((prevData) => ({ ...prevData, [name]: value }))
    }
    
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/jwt/create/', loginData);
            console.log(response.data);
        } catch (error) {
            setShowError(error.response.data.detail)
            console.error('fetching error: ', error.response.data);
        }
    }

    return (
        <div className='max-w-7xl mt-24 container'>
            <h1 className='text-yellow-500 mb-4 font-bold text-center'>{showError}</h1>
            <div className='w-1/4 border shadow bg-secondery rounded-md mx-auto py-4 px-4'>
                <h1 className='font-medium text-lg tracking-widest text-center text-white'>Login form</h1>

                <form onSubmit={submit}>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="name" className='font-bold text-white'>Name:</label>
                        <input type="text" placeholder='Ex: mahdi hasan'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                            value={loginData.user_name}
                            name='user_name'
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-3'>
                        <label htmlFor="email" className='font-bold text-white'>Email:</label>
                        <input type="text" placeholder='Ex: example@yandex.com'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                            value={loginData.email}
                            name='email'
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-3'>
                        <label htmlFor="password" className='font-bold text-white'>Password:</label>
                        <input type="text" placeholder='Ex: ######'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                            value={loginData.password}
                            name='password'
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" className='py-2 px-5 bg-white rounded mt-4 font-semibold mx-auto block'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login




