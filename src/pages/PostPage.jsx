import React, { useState } from 'react'
import "wired-elements"
import CustomDialog from '../components/CustomDialog';

const PostPage = () => {
    let isLoggedIn = false;
    const [showDialog, setShowDialog] = useState(false);
    const [showIngredientDialog, setShowIngredientDialog] = useState(false);

    return (
        <div className="justify-center text-center md:px-5 lg:px-16">
            {showDialog && (
                <CustomDialog title="Add Instruction" onClose={() => setShowDialog(false)}>
                    <div className='flex flex-col'>
                        <div className="flex flex-row py-2 px-4">
                            <wired-checkbox>Is it optional?</wired-checkbox>
                        </div>
                        <div className="flex flex-row py-2 justify-center text-left">
                            <wired-textarea placeholder="Enter instruction" rows="3"></wired-textarea>
                        </div>
                        <div className="flex flex-row justify-center">
                            <wired-button>Add Instruction</wired-button>
                        </div>
                    </div>
                </CustomDialog>
            )}
            {showIngredientDialog && (
                <CustomDialog title="Add Ingridient" onClose={() => setShowIngredientDialog(false)}>
                    <div className='flex flex-col'>
                        <div className="flex flex-row py-2 px-4">
                            <wired-input placeholder="Enter name"></wired-input>
                        </div>
                        <div className="flex flex-row py-2 justify-center text-left">
                            <wired-combo id="combo" selected="two">
                                <wired-item value="one">Number One</wired-item>
                                <wired-item value="two">Number Two</wired-item>
                                <wired-item value="three">Number Three</wired-item>
                            </wired-combo>
                        </div>
                        <div className="flex flex-row justify-center">
                            <wired-button>Add Instruction</wired-button>
                        </div>
                    </div>
                </CustomDialog>
            )}
            {!isLoggedIn ? (
                <div>
                    <p className="text-4xl sm:text-3xl py-5">
                        Oops!
                    </p>

                    <p className="text-lg">
                        You need to be signed up or signed in to post recipies.
                    </p>

                    <div className="flex flex-row gap-3 justify-center my-6">
                        <wired-button>
                            <a href="/signUp">SignUp</a>
                        </wired-button>

                        <wired-button>
                            <a href="/signIn">SignIn</a>
                        </wired-button>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col'>
                    <div className="flex flex-row py-2 justify-center">
                        <wired-input class="w-2/4 justify-center " placeholder="Enter title"></wired-input>
                    </div>
                    <div className="flex flex-row py-2 justify-center text-left">
                        <wired-textarea class="w-2/4 justify-center " placeholder="Enter description" rows="3"></wired-textarea>
                    </div>
                    <div className="flex flex-row py-5 justify-center gap-4">
                        Instructions <wired-button onClick={() => setShowDialog(true)}> Add + </wired-button>
                    </div>
                    <div className="flex flex-row py-5 justify-center gap-4">
                        Ingridients <wired-button onClick={() => setShowIngredientDialog(true)}> Add + </wired-button>
                    </div>

                    <div className="flex flex-row justify-center">
                        <wired-button>Post Recipe</wired-button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PostPage