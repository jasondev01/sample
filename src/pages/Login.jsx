import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, errors } = useAuthContext();

    const handleLogin = async (e) => {
        e.preventDefault();
        login({ email, password });
    }

    return (
        <section className='bg-[#f4f7ff] py-20 lg:py-[120px]'>
            <div className='container mx-auto'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                            <div className='mb-10 text-center md:mb-16'>Login</div>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Email'
                                        className='
                                            border-[#e9edf4]
                                            w-full
                                            rounded-md
                                            border
                                            bg-[#fcfdfe]
                                            py-3
                                            px-5 
                                            text-base text-body-color
                                            placeholder-[#acb6be]
                                            outline-none 
                                            focus:border-primary
                                            focus-visible:shadow-none
                                        '
                                    />
                                    {
                                        errors.email &&
                                        <div className='flex'>
                                            <span className='text-red-400 text-sm m-2 p-2'>
                                                { errors.email[0] }
                                            </span>
                                        </div>
                                    }
                                </div>
                                <div className="mb-4">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Password'
                                        className='
                                            border-[#e9edf4]
                                            w-full
                                            rounded-md
                                            border
                                            bg-[#fcfdfe]
                                            py-3
                                            px-5 
                                            text-base text-body-color
                                            placeholder-[#acb6be]
                                            outline-none 
                                            focus:border-primary
                                            focus-visible:shadow-none
                                        '
                                    />
                                    {
                                        errors.password &&
                                        <div className='flex'>
                                            <span className='text-red-400 text-sm m-2 p-2'>
                                                { errors.password[0] }
                                            </span>
                                        </div>
                                    }
                                    
                                </div>
                                <div className="mb-10">
                                    <button 
                                        type='submit'
                                        className='
                                            w-full
                                            px-4
                                            py-3
                                            bg-indigo-500
                                            hover:bg-indogo-700
                                            rounded-md
                                            text-white
                                        '
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <Link
                                to='/forgot-password'
                                className="
                                    m-2
                                    inline-block
                                    text-base text-[#adadad]
                                    hover:text-primary hover:uderline
                                "
                            >
                                Forgot Password?
                            </Link>
                            <Link
                                to='/register'
                                className="
                                    m-2
                                    block
                                    text-base text-[#adadad]
                                    hover:text-primary hover:uderline
                                "
                            >
                                Not a member yet? Sign up now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login