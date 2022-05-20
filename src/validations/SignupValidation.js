import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[A-Za-z ]*$/


export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short! Shall Not be Less than 3-Character!')
        .max(30, 'Too Long! Shall Not be More than 30-Character!')
        .matches(nameRegExp, 'Please Enter a Valid Name (Only English Alphabets)!')
        .required('Name is Required!'),
    email: Yup.string()
        .email('Please Provide a Valid Email Id!')
        .required('Email Id is Required!'),
    password: Yup.string()
        .min(4, 'Too Short! Shall Not be Less than 4-Character!')
        .max(16, 'Too Long! Shall Not be More than 16-Character!')
        .required('Password is Required!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password & Confirm-Password Must Match!')
        .required('Required! This Can Not be Empty!'),
    phoneNumber: Yup.string()
        .required('Phone Number is Required!')
        .matches(phoneRegExp, 'Phone Number is Not Valid')
        .min(10, 'Too Short!')
        .max(10, 'Too Long!'),
    tandc: Yup.boolean()
        .oneOf([true], 'You Must Accept the Terms & Conditions'),
})