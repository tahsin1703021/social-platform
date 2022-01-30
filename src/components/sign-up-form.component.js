import { Form, Field, Formik, ErrorMessage, select} from 'formik'; 
import signupSchema from '../schema/signup.schema';
const SignUp = () => {
    return ( 
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName:'',
                    dBirth: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    sex: '',
                    hobbies: []
                }}
                validationSchema={signupSchema}
                onSubmit={(values,actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                {formikProps => (
                    <Form onSubmit={formikProps.handleSubmit}>
                        {/* First name */} 
                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">First Name <span className="text-danger">*</span></label>
                            <Field
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                            />
                            <div className="invalid-feedback d-block"><ErrorMessage name="firstName"/></div>
                        </div>

                        {/* last name */} 
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Last Name <span className="text-danger">*</span></label>
                            <Field
                                className="form-control"
                                type="text"
                                id="lastName"
                                name="lastName"
                            />
                            <div className="invalid-feedback d-block"><ErrorMessage name="lastName"/></div>
                        </div>

                        {/*  date of birth*/}
                        <div className="form-group">
                            <label className="form-label" htmlFor="dBirth">Date of Birth <span className="text-danger">*</span></label>
                            <Field
                                className="form-control"
                                type="text"
                                id="dBirth"
                                name="dBirth"
                            />
                            <div className="invalid-feedback d-block"><ErrorMessage name="dBirth"/></div>
                        </div>

                        {/*  email */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email <span className="text-danger">*</span></label>
                            <Field
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                            />
                            <div className="invalid-feedback d-block"><ErrorMessage name="email"/></div>
                        </div>
                        
                        {/*  passworrd */}
                        <div className="form-group">    
                            <label className="form-label" htmlFor="password">Password <span className="text-danger">*</span>
                            <Field
                                className="form-control"
                                type="password" 
                                id="password"
                                name="password"
                            />
                            <div className="invalid-feedback d-block"><ErrorMessage name="password"/></div>
                            </label>
                        </div>

                        {/* confirm password */}
                        <div className="form-group">    
                            <label className="form-label" htmlFor="confirmPpassword">Confirm Password <span className="text-danger">*</span></label>
                            <Field
                                className="form-control"
                                type="password" 
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                            <div className="invalid-feedback d-block"><ErrorMessage name="confirmPassword"/></div>
                        </div>

                        {/* dropdown */}
                        <div className='form-group'>
                            <label className='form-label' htmlFor='sex'>Sex<span className="text-danger">*</span></label>
                            <Field as="select" name="sex">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                            <div className="invalid-feedback d-block"><ErrorMessage name="sex"/></div>
                        </div>
                        
                        {/* checkbox*/}
                        <div className='form-group'>
                        <label className='form-label'> What are your hobbies?
                                <label>
                                    <Field type="checkbox" name="hobbies" value="Cricket" />
                                        Cricket
                                </label>
                                <label>
                                    <Field type="checkbox" name="hobbies" value="Football" />
                                        Football
                                </label>
                                <label>
                                    <Field type="checkbox" name="hobbies" value="Basketball" />
                                        Basketball
                                </label>
                        </label>
                        </div>
                        

                        <button type="submit" className="btn btn btn-primary">Save Changes</button>
                
                    </Form>
                )
                    
                }
        
            </Formik>
        
        </>
     );
}
 
export default SignUp;