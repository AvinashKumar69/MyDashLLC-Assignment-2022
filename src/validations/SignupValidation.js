import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Name is Required!'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email Id is Required!'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password Must Match!')
        .required('Required!'),
    phoneNumber: Yup.string()
        .required('Phone Number is Required!')
        .matches(phoneRegExp, 'Phone number is Not Valid')
        .min(10, 'Too Short!')
        .max(10, 'Too Long!'),
})