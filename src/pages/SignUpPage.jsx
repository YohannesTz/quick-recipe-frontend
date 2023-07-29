import React from 'react'

const SignUpPage = () => {
    return (
        <div className="justify-center text-center md:px-5 lg:px-16">
            <div className='flex flex-col gap-2'>
                <div className="flex flex-row justify-center font-bold text-lg">
                    <p>SignUp here.</p>
                </div>
                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter email"></wired-input>
                </div>

                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter password"></wired-input>
                </div>

                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter displayName"></wired-input>
                </div>

                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter photourl"></wired-input>
                </div>

                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter password"></wired-input>
                </div>

                <div className="flex flex-row justify-center">
                    <wired-button>SignUp</wired-button>
                </div>
                <div className="flex flex-row text-center justify-center my-5">
                    already have an account?<wired-link href="/signIn">Sign in here</wired-link>.
                </div>
            </div>
        </div>
    )
}

export default SignUpPage