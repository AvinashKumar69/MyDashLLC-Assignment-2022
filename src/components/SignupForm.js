import React, { useState } from 'react';
import '../styles/SignupForm.css';

const SignupForm = () => {

    const [data, setData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const [focused, setFocused] = useState(false)

    const onChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <form className='flex flex-col items-center justify-center space-y-4 h-auto w-96 mx-auto shadow-lg p-5 rounded-lg'>
                <h1 className='text-xl font-semibold'>Create an Account</h1>

                <div className='flex flex-col justify-center w-80'>
                    <label className='pl-2 text-gray-500'>Your Full Name</label>
                    <input className='border-2 border-gray-500 rounded-lg p-2' type='text' name='fullName' placeholder='Enter Your Full Name...'
                        value={data.fullName}
                        onChange={onChange}
                        required
                        onBlur={(e) => setFocused(!focused)}
                        focused={focused.toString()}
                        pattern="^[A-Za-z0-9]{3,16}$"
                    />
                    <span className='text-red-600 pl-2 hidden'>
                        Name should be 3-16 characters and shouldn't include any special character!
                    </span>
                </div>

                <div className='flex flex-col justify-center w-80'>
                    <label className='pl-2 text-gray-500'>Your Email Id</label>
                    <input className='border-2 border-gray-500 rounded-lg p-2' type='email' name='email' placeholder='Enter Your Email Id...'
                        value={data.email}
                        onChange={onChange}
                        required
                        onBlur={(e) => setFocused(!focused)}
                        focused={focused.toString()}
                    />
                    <span className='text-red-600 pl-2 hidden'>
                        It should be a valid email address!
                    </span>
                </div>

                <div className='flex flex-col justify-center w-80'>
                    <label className='pl-2 text-gray-500'>Your Phone Number</label>
                    <input className='border-2 border-gray-500 rounded-lg p-2' type='tel' name='phoneNumber' placeholder='Enter Your Phone Number...'
                        value={data.phoneNumber}
                        onChange={onChange}
                        required
                        onBlur={(e) => setFocused(!focused)}
                        focused={focused.toString()}
                    />
                    <span className='text-red-600 pl-2 hidden'>Error Message</span>
                </div>

                <div className='flex flex-col justify-center w-80'>
                    <label className='pl-2 text-gray-500'>Your Password</label>
                    <input className='border-2 border-gray-500 rounded-lg p-2' type='password' name='password' placeholder='Enter Your Password...'
                        value={data.password}
                        onChange={onChange}
                        required
                        onBlur={(e) => setFocused(!focused)}
                        focused={focused.toString()}
                        pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                    />
                    <span className='text-red-600 pl-2 hidden'>
                        Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!
                    </span>
                </div>

                <div className='flex flex-col justify-center w-80'>
                    <label className='pl-2 text-gray-500'>Confirm Your Password</label>
                    <input className='border-2 border-gray-500 rounded-lg p-2' type='password' name='confirmPassword' placeholder='Confirm Your Password...'
                        value={data.confirmPassword}
                        onChange={onChange}
                        required
                        onBlur={(e) => setFocused(!focused)}
                        focused={focused.toString()}
                        pattern={data.password}
                        onFocus={() => data.name === "confirmPassword" && setFocused(true)}
                    />
                    <span className='text-red-600 pl-2 hidden'>
                        Passwords don't match!
                    </span>
                </div>

                <button className='border-2 bg-blue-500 rounded-lg p-2 w-80 text-white font-medium' type='button'>
                    Create Account
                </button>
            </form>
        </>
    )
}

export default SignupForm;