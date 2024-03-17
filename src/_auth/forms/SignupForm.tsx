import { useState } from "react"
import { Link } from "react-router-dom"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const { name, username, email, password } = formData

    const onSubmit = () => {

    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value  
        }))
    }

    return (
        <>
            <div className="flex flex-col items-center w-full">
                <section className="flex flex-col justify-center items-center">
                    <img src='/assets/images/logo.svg' alt='logo' className="pt-10" />
                    <h2 className="text-2xl xl:text-3xl font-semibold font-sans mt-5">Create a new account</h2>
                    <p className="text-[12px] xl:text-[16px] text-slate-600 font-sans mt-1">To use use PixelGram, please enter your details</p>
                </section>

                <section className="m-4 w-2/3">
                    <form onSubmit={onSubmit} className="flex flex-col gap-5">
                        <div className="">
                            <p className="font-serif mb-2 text-[16px]">Name</p>
                            <input 
                                type="text"
                                className="pl-1 w-full h-12 bg-[#1F1F22] border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter your name"
                                onChange={onChange}
                            />
                        </div>
                        <div className="">
                            <p className="font-serif mb-2 text-[16px]">Username</p>
                            <input 
                                type="textemail"
                                className="pl-1 w-full h-12 bg-[#1F1F22] border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important"
                                id="username"
                                name="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={onChange}
                            />
                        </div>
                        <div className="">
                            <p className="font-serif mb-2 text-[16px]">Email</p>
                            <input 
                                type="email"
                                className="pl-1 w-full h-12 bg-[#1F1F22] border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={onChange}
                            />
                        </div>
                        <div className="">
                            <p className="font-serif mb-2 text-[16px]">Password</p>
                            <input 
                                type="password"
                                className="pl-1 w-full h-12 bg-[#1F1F22] border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={onChange}
                            />
                        </div>
                        
                        <div>
                            <button type="submit" className="font-serif text-[18px] w-full h-12 bg-blue-600 rounded-md">
                                Sign up
                            </button>
                        </div>
                    </form>
                </section>

                <section className="my-1">
                    <p className="font-serif text-[14px] text-white">Already have an account? <Link to='/sign-in' className="text-primary-500 text-blue-500 text-small-semibold ml-1">Sign in</Link></p>
                </section>
            </div>
        </>
    )
}

export default SignupForm