import React from 'react'

const SignInPage = () => {
    return (
        <div className="justify-center text-center md:px-5 lg:px-16">
            <div className='flex flex-col gap-2'>
                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 lg:w-1/4 justify-center " placeholder="Enter email"></wired-input>
                </div>

                <div className="flex flex-row py-2 justify-center">
                    <wired-input class="md:w-2/4 justify-center lg:w-1/4 " placeholder="Enter password"></wired-input>
                </div>

                <div className="flex flex-row justify-center">
                    <wired-button>SignIn</wired-button>
                </div>
                <div className="flex flex-row text-center justify-center my-5">
                    don't have an account?<wired-link href="/signUp">Sign up here</wired-link>. 
                </div>
            </div>
        </div>
    )
}

export default SignInPage