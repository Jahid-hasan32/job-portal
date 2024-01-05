import React, { useState } from 'react';
import axios from 'axios';
import loading from '../../asset/loading.gif'

const Register = () => {
    const [loadingHandle, setLoadingHandle] = useState(false)
    const [messages, setMessages] = useState(false)
    const [registerData, setRegisterData] = useState({
        user_name: '',
        email: '',
        phone: '',
        password: '',
        re_password: '',
    });


    const handleInputChange = (e) => {
        // console.log(registerData);
        const { name, value } = e.target;
        setRegisterData((prevData) => ({ ...prevData, [name]: value }));
        // console.log(registerData);
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/users/', registerData);
            console.log(response.data);
            setMessages(true)
            setLoadingHandle(false)
            // handle success, update UI or redirect
        } catch (error) {
            console.error(error.response.data);
            // handle error, display error messages
        }
    };

    return (
        <div className='max-w-7xl mt-12 container'>
            {
                messages ? (
                    <h1 className="text-whit mb-4 text-center font-bold">We sent an activation link to your mail! Check that to activate your account!</h1>
                ) : ''
            }

            <div className='w-1/4 border shadow bg-secondery rounded-md mx-auto py-4 px-4'>
                <h1 className='font-medium text-lg tracking-widest text-center text-white'>Register form</h1>

                <form onSubmit={handleRegistration}>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="userName" className='font-bold text-white'>
                            Name:
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            value={registerData.user_name}
                            onChange={handleInputChange}
                            placeholder='Ex: mahdi hasan'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-3'>
                        <label htmlFor="email" className='font-bold text-white'>
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleInputChange}
                            placeholder='Ex: example@yandex.com'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-3'>
                        <label htmlFor="phone" className='font-bold text-white'>
                            Phone:
                        </label>
                        <input
                            type="number"
                            name="phone"
                            value={registerData.phone}
                            onChange={handleInputChange}
                            placeholder='Ex: 018xxxxxxxx'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-3'>
                        <label htmlFor="password1" className='font-bold text-white'>
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={registerData.password}
                            onChange={handleInputChange}
                            placeholder='Ex: ######'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                        />
                    </div>
                    <div className='flex flex-col gap-y-1 mt-3'>
                        <label htmlFor="password2" className='font-bold text-white'>
                            Confirm password:
                        </label>
                        <input
                            type="password"
                            name="re_password"
                            value={registerData.re_password}
                            onChange={handleInputChange}
                            placeholder='Ex: ######'
                            className='p-2 rounded text-primary outline-none focus:ring-1 focus:ring-white'
                        />
                    </div>
                    <button type="submit" onClick={(e) => setLoadingHandle(true)} className='py-2 px-5 bg-white rounded mt-4 font-semibold mx-auto block'>

                        {
                            loadingHandle ? (<img className='' src={loading} alt="" />) : 'Submit'
                        }

                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
