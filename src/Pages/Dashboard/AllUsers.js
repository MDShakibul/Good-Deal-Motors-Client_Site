import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading/Loading';
import SingleUser from './SingleUser';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>All users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <SingleUser
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></SingleUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;