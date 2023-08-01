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
    displayName: yup
        .string()
        .required('display Name is required'),
    photoUrl: yup
        .string()
        .url()
        .required('Photourl is required'),
});

const SignUpPage = () => {
    const [result, setResult] = useState({});
    const [status, setStatus] = useState("idle");
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            displayName: "",
            photoUrl: "https://robohash.org/quick-recipe",
            themeColor: "#fff",
            themeName: "default"
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            setStatus("loading");

            axios.post(BASE_URL + "/api/v1/auth/signUp", values)
                .then(response => {
                    console.log(response.data);

                    setResult(response);
                    setStatus("fin");
                })
                .catch(err => {
                    setStatus("err");
                    setResult(err);
                });
        }
    });

    const handleChange = (e) => {
        console.log(e.value);
    }

    return (
        <div className="justify-center text-center md:px-5 lg:px-16">
            <div className='flex flex-col gap-2'>
                <div className="flex flex-row justify-center font-bold text-lg">
                    <p>SignUp here.</p>
                </div>
                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 w-3/4" placeholder="Enter email" value={formik.values.email} onChange={handleChange}></wired-input>
                </div>
                {formik.errors.email}
                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 w-3/4" type="password" placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange}></wired-input>
                </div>
                {formik.errors.password}
                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 w-3/4" placeholder="Enter displayName" value={formik.values.displayName} onChange={formik.handleChange}></wired-input>
                </div>
                {formik.errors.displayName}
                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 w-3/4" placeholder="Enter photourl" value={formik.values.photoUrl} onChange={formik.handleChange}></wired-input>
                </div>
                {formik.errors.photoUrl}
                {console.log(formik.values)}
                <div className="flex flex-row justify-center">
                    <wired-button onClick={formik.handleSubmit}  disabled={Object.keys(formik.errors).length === 0}>SignUp</wired-button>
                </div>
                <div className="flex flex-row text-center justify-center my-5">
                    already have an account?<wired-link href="/signIn">Sign in here</wired-link>.
                </div>
            </div>
        </div>
    );
}

export default SignUpPage