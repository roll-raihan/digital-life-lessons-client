import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Login = () => {

    const { register,
        handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (e) => {
        // e.preventDefault();
        console.log(e)
    }

    return (
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10 mx-auto'>
            <h1 className="text-5xl font-bold text-center my-4">Login now!</h1>
            <form className='card-body' onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }

                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,}).*$/ })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one uppercase, one lowercase character</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-secondary mt-4">Login</button>
                    <p>Don't have an account? Please <Link className='text-blue-600 underline' to='/register'>Register</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;