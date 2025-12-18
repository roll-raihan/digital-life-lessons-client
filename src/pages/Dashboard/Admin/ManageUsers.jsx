import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading';
import { FcApprove, FcDisapprove } from "react-icons/fc";
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleUserAsAdmin = email => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to mark "${email}" as admin!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${email}`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Modified!",
                            text: "Your file has been modified.",
                            icon: "success"
                        })
                    }).catch(err => {
                        console.log('Error from manage user handle user to admin', err)
                    })


            }
        });
    }

    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log('Error in manage user:', err)
                    })
            }
        });
    }

    if (isLoading) return <Loading></Loading>

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className='font-bold text-3xl m-4'>Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userInfo, i) => <tr key={userInfo._id}>
                                <th>{i + 1}</th>
                                <td>{userInfo?.displayName}</td>
                                <td>{userInfo?.email}</td>
                                <td>{userInfo?.role}</td>
                                <td className='flex gap-2'>
                                    <button onClick={() => handleUserAsAdmin(userInfo?.email)} className='btn btn-sm'><FcApprove /></button>
                                    <button onClick={() => handleUserDelete(userInfo?._id)} className='btn btn-sm'><FcDisapprove /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;