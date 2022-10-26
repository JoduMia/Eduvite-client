import { Button, Label, TextInput } from 'flowbite-react'
import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Update = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { updateUserInfo, user} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const name = fname + ' ' + lname;
        const photo = form.photo.value;
        form.reset();

        updationOfUser(photo,name)
    };

    const updationOfUser = (photo, name) => {
      const profile = {
        displayName: name,
        photoURL: photo
      };
      updateUserInfo(profile)
        .then(()=> {
          setSuccess('User profile updated!!!');
          toast.success('User profile updated!!!');
        }).catch(error =>{
            setError(error.message);
            toast.error(error.message);

        });
    };
    return (
        <div className=' dark:bg-[#000000ca] rounded-md flex items-center justify-center h-[93vh]'>
            <div className='w-[80%] md:w-[50%] shadow-lg bg-[#212122c1] dark:bg-white rounded py-5 px-6 md:px-20 space-y-3'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name1"
                                value="Your First name"
                                className='!text-white dark:!text-black'
                            />
                        </div>
                        <TextInput
                            id="fname"
                            name='fname'
                            type="text"
                            placeholder="Enter your first name"
                            required={true}
                        />

                        <div className="mb-2 block">
                            <Label
                                htmlFor="name2"
                                value="Your last name"
                                className='!text-white dark:!text-black'
                            />
                        </div>
                        <TextInput
                            id="lname"
                            name='lname'
                            type="text"
                            placeholder="Enter your last name"
                            required={true}
                        />

                        <div className="mb-2 block">
                            <Label
                                htmlFor="image"
                                value="Your image"
                                className='!text-white dark:!text-black'
                            />
                        </div>
                        <TextInput
                            id="image1"
                            name='photo'
                            type="text"
                            placeholder="Enter your photoURL"
                        />
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                                className='!text-white dark:!text-black'
                            />
                        </div>
                        <TextInput
                            id="email1"
                            name='email'
                            type="email"
                            placeholder="Enter Your Eamil Address"
                            value={user.email}
                            readOnly
                        />
                    </div>
                    <div>
                        <Button type="submit">
                            Update
                        </Button>
                    </div>
                </form>
                <p className='text-red-400 font-medium'>{error && error}</p>
                <p className='text-green-500 font-medium'>{success && success}</p>

                <div>
                    <p className='font-semibold'> <Link to='/' className='text-yellow-300'><FaHome className='inline mr-2' />Back to Home</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Update;