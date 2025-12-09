import React from 'react';
import errorPage from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center flex-col p-10 bg-gray-200 h-full'>
            <div className=''>
                <img src={errorPage} alt="Error. Page Not Found" className='' />
            </div>
            <div className='flex flex-col justify-center items-center p-2'>
                <h1 className='text-4xl font-bold mt-2 mb-2 text-center'>Oops, page not found!</h1>
                <p className='text-center mb-2'>The page you are looking for is not available.</p>
                <Link to="/">
                    <button className='btn btn-primary'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;