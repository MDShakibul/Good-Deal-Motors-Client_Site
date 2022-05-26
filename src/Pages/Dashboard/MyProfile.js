import React from 'react';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const onSubmit = event => {
        event.preventDefault();
        const profile = {
            name: event.target.name.value,
            email: event.target.email.value,
            location: event.target.location.value,
            contact: event.target.contact.value,
            github: event.target.github.value
        }

        fetch('http://localhost:5000/myprofile', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Wow you save your profile');
                    event.target.reset();
                }

                else
                    toast.error('Some thing went wrong');
            })
    }

    return (
        <div>
            <h2>Welcome To Your Profile</h2>

            <div>
                <p>Name: </p>
                <p>Email: </p>
                <p>Location: </p>
                <p>Contact: </p>
                <p>Github Link: </p>
            
            </div>
            <div className='flex justify-center items-center mt-3'>
                <form onSubmit={onSubmit}>
                    <input type="text" name='name' placeholder="Name here" className="input input-bordered w-full mx-auto mt-2 mb-2"/>
                    <input type="email" name='email' placeholder="Email here" className="input input-bordered w-full mx-auto mt-2 mb-2" />
                    <input type="text" name='location' placeholder="Your Location" className="input input-bordered w-full mx-auto mt-2 mb-2"/>
                    <input type="text" name='contact' placeholder="Your Contact Number" className="input input-bordered w-full mx-auto mt-2 mb-2" />
                    <input type="text" name='github' placeholder="Your Github" className="input input-bordered w-full mx-auto mt-2 mb-2" />
                    <input type="submit" value='Submit' className="btn w-full mx-auto text-white btn-success mt-6"/>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;