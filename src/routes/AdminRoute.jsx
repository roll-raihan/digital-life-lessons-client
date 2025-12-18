import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/shared/Loading';
import useRole from '../hooks/useRole';

const AdminRoute = ({ children }) => {

    const { loading } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role?.role !== 'admin') {
        return <div className='min-h-screen flex justify-center items-center font-bold text-2xl'>Forbidden Access</div>
    }

    return children;
};

export default AdminRoute;