import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle, setUser } = useAuth();
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleLogin = (data) => {
        // console.log('form data', data);
        signInUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    title: "Successfully logged in!",
                    icon: "success",
                    draggable: true,
                    timer: 1500
                });
                navigate(location?.state || '/')
            })
            .catch(error => {
                toast(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                Swal.fire({
                    title: "Successfully logged in!",
                    icon: "success",
                    draggable: true,
                    timer: 1500
                });
                navigate(location?.state || '/')
            })
            .catch((error) => {
                toast(error.message)
            })
    }

    // Demo login function
    const handleDemoLogin = () => {
        const demoEmail = "demo@user.com";
        const demoPassword = "1234aA@";

        signInUser(demoEmail, demoPassword)
            .then(result => {
                // const user = result.user;
                // setUser(user);
                navigate(location.state ? location.state : "/");
                Swal.fire({
                    title: "Welcome Demo User!",
                    text: "You are now logged in as a demo user",
                    icon: "success",
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };

    return (
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10 mx-auto mt-16'>
            <h1 className="text-5xl font-bold text-center my-4">Login now!</h1>
            <ToastContainer></ToastContainer>
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
                    <button className="btn btn-secondary mt-4">Login</button>
                    <p>Don't have an account? Please <Link state={location?.state} className='text-blue-600 underline' to='/register'>Register</Link></p>
                    <p className='font-bold text-center my-2'>Or,</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-accent text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <div className='flex justify-center items-center flex-col'>
                        <p>Want to visit as a demo user? Click Demo button.</p>
                        <button onClick={handleDemoLogin} type="button" className='btn btn-primary mt-4'>Demo</button>
                    </div>
                </fieldset>
                <p>Don't have an account? Please, <Link to="/register" className='font-semibold text-blue-500 underline '>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;