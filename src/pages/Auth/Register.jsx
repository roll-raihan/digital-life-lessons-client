import React from 'react';
import { useForm } from "react-hook-form"

const Register = () => {

    const { register,
        handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className='card-body' onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required'}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true })} className="input" placeholder="Password" />
                    {errors.password?.type === 'required'}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;