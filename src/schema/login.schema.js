import { string, object } from "yup";

const loginSchema = object().shape({
    
    email: string()
        .trim()
        .email('Email must be a valid email')
        .min(2,' This field should be atleast 2 characters long')
        .max(20,' This field should be atmost 20 characters long')
        .required(' This field must not be empty'),

    password: string()
            .min(2,' This field should be atleast 2 characters long')
            .max(50,' This field should be atmost 50 characters long')
            .required('This field must not be empty')

})
                    

export default loginSchema;