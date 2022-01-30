import { string, object, ref } from "yup";

const signupSchema = object().shape({

    firstName: string()
        .trim()        
        .min(2,' This field should be atleast 2 characters long')
        .max(20,' This field should be atmost 20 characters long')
        .required(' This field must not be empty'),

    lastName: string()
        .trim()        
        .min(2,' This field should be atleast 2 characters long')
        .max(20,' This field should be atmost 20 characters long')
        .required(' This field must not be empty'),

    dBirth: string()
        .trim()
        .required(' This field must not be empty'),

    email: string()
        .trim()
        .email('Email must be a valid email')
        .min(2,' This field should be atleast 2 characters long')
        .max(20,' This field should be atmost 20 characters long')
        .required(' This field must not be empty'),

    password: string()
            .min(2,' This field should be atleast 2 characters long')
            .max(50,' This field should be atmost 50 characters long')
            .required('This field must not be empty'),

    confirmPassword: string()
            .oneOf([ref('password'),null], 'Passwords should match'),

    sex: string()
        .required('This field must be filled'),
  
    

})
                    

export default signupSchema;