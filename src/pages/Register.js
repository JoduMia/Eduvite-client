import { Button, Label, TextInput } from 'flowbite-react'
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {
    // const [error, setError] = useState('');
    // const [accepted, setAccepted] = useState(false);
    const {emailPassRegister, updateUserInfo, verifyEmail} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const name = fname + ' ' + lname;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(fname,lname , name);

        emailPassRegister(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            //update user photo and name
            updationOfUser(photo,name);

            //email verification
            verifyEmail()
            .then(() => {})
            .catch(error => {});

            //toast
            toast.success('Please verify your email. Verification has been sent!')
        })
        .catch(error => {
            console.log(error.message);
            // setError(error.message);
        });
    };

    const updationOfUser = (photo, name) => {
      const profile = {
        displayName: name,
        photoURL: photo
      };
      updateUserInfo(profile)
        .then(()=> {
          console.log('user updated');
        }).catch(error =>console.log(error.message));
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
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                                className='!text-white dark:!text-black'
                            />
                        </div>
                        <TextInput
                            id="password1"
                            name='password'
                            type="password"
                            required={true}
                            placeholder='Enter Your Password'
                        />
                    </div>
                    <div>
                        <Button type="submit">
                            Register
                        </Button>
                    </div>
                </form>

                <div>
                    <p className='font-semibold'>Already have an Account? Please <Link to='/login' className='text-blue-700'>Login !!!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register