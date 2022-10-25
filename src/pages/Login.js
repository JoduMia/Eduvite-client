import { Button, Label, TextInput } from 'flowbite-react'
import React, { useContext } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider'

const Login = () => {
    const { googleSignIn, signWithEmailPass,githubAuth } = useContext(AuthContext);

    //login with google
    const googleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const githubSignIn = () => {
        githubAuth()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
            })
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()

        signWithEmailPass(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            toast.error(error.message);
        })
    };



    return (
        <div className='dark:bg-[#000000ca] rounded-md flex items-center justify-center h-[100vh]'>
            <div className='w-[80%] md:w-[50%] shadow-lg bg-green-300 dark:bg-white rounded p-3 space-y-3'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                                className='dark:!text-black'
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
                                className='dark:!text-black'
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
                            Submit
                        </Button>
                    </div>
                </form>

                <div>
                    <p className='font-semibold'>Haven't an Account? Please <Link to='/register' className='text-blue-700'>Register!!!</Link></p>
                </div>
                <div className='flex flex-col space-y-2 items-center justify-center'>
                    <Button onClick={googleLogin} >
                        <p><FaGoogle className='mr-2' /></p> Login With Google
                    </Button>

                    <Button onClick={githubSignIn}>
                        <p><FaGithub className='mr-2' /></p> Login With Github
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login


