import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { SignupSchema } from '../validations/SignupValidation';
import { useNavigate } from 'react-router-dom';

const SignUpForm222 = () => {

  const navigate = useNavigate()

  return (
    <div className='w-1/2'
      style={{ backgroundColor: 'rgb(247 247 247)' }}
    >
      <div className='flex flex-col items-center justify-center space-y-2'>
        <h1 className='text-xl font-bold'>Create an Account</h1>

        <Formik
          initialValues={{
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
            const userData = values
            console.log('userData-->', userData);
            navigate('/barchartpage')
          }}
        >
          {({ errors, touched }) => (
            <Form className='flex flex-col items-start justify-center space-y-2'>
              <label className='text-gray-500'>Your Full Name</label>
              <Field className='border-2 border-gray-300 rounded-lg p-2 w-96' name="name" type="text" placeholder='Enater Your Full Name...' />
              {errors.name && touched.name ? (
                <span className='text-red-500'>{errors.name}</span>
              ) : null}
              {/* <ErrorMessage name="name" /> */}

              <label className='text-gray-500'>Your Email Address</label>
              <Field className='border-2 border-gray-300 rounded-lg p-2 w-96' name="email" type="email" placeholder='abc@example.com' />
              {errors.email && touched.email ? (
                <span className='text-red-500'>{errors.email}</span>
              ) : null
              }

              <label className='text-gray-500'>Your Phone Number</label>
              <Field className='border-2 border-gray-300 rounded-lg p-2 w-96' name="phoneNumber" type="tel" placeholder='Enter Your Phone Number...' />
              {errors.phoneNumber && touched.phoneNumber ? (
                <span className='text-red-500'>{errors.phoneNumber}</span>
              ) : null
              }

              <label className='text-gray-500'>Your Password</label>
              <Field className='border-2 border-gray-300 rounded-lg p-2 w-96' name="password" type="password" placeholder='Enater Your Password' />
              {errors.password && touched.password ? (
                <span className='text-red-500'>{errors.password}</span>
              ) : null
              }

              <label className='text-gray-500'>Confirm Your Password</label>
              <Field className='border-2 border-gray-300 rounded-lg p-2 w-96' name="confirmPassword" type="password" placeholder='Confirm Your Password' />
              {errors.confirmPassword && touched.confirmPassword ? (
                <span className='text-red-500'>{errors.confirmPassword}</span>
              ) : null
              }

              <button className='bg-blue-500 p-2 rounded-lg text-white font-semibold w-96' type="submit">
                Create Account
              </button>
            </Form >
          )}
        </Formik >
      </div >
    </div>
  )
}

export default SignUpForm222;