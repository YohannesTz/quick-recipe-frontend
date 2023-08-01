import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../util/util';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 8 characters length')
        .max(16, 'Password should be of maximum 16 characters length')
        .required('Password is required'),
});


const SignInPage = () => {
    const [result, setResult] = useState({});
    const [status, setStatus] = useState("idle");
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setIsLoading(true);
            setStatus("loading");
            
            axios.post(BASE_URL + "/api/v1/signUp", values)
                .then(response => {
                    console.log(response.data);

                    setResult(response);
                    setIsLoading(false);
                    setStatus("fin");
                })
                .catch(err => {
                    setIsLoading(false);
                    setResult(err);
                    setStatus("err");
                });
        }
    });

    return (
        <div className="justify-center text-center md:px-5 lg:px-16">
            <form>
                <div className='flex flex-col gap-2'>
                    <div className="flex flex-row justify-center font-bold text-lg">
                        <p>SignUp here.</p>
                    </div>
                    <div className="flex flex-row py-2 justify-center">
                        <wired-input class="md:w-2/4 lg:w-1/4 justify-center " placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange}></wired-input>
                    </div>

                    <div className="flex flex-row py-2 justify-center">
                        <wired-input type="password" class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange}></wired-input>
                    </div>

                    <div className="flex flex-row justify-center">
                        <wired-button>SignIn</wired-button>
                    </div>
                    <div className="flex flex-row text-center justify-center my-5">
                        don't have an account?<wired-link href="/signUp">Sign up here</wired-link>.
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignInPage