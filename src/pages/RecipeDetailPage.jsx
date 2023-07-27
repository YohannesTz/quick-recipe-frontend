import React from 'react'

const RecipeDetailPage = () => {
    return (
        <div className="justify-center text-center md:px-5 lg:px-16">
            <span className="font-bold text-xl mx-4 my-8">Spaghetti Bolognese</span>

            <p className="m-4 text-justify">
                Spaghetti Bolognese is a classic Italian dish that is popular all over the world. It's a hearty and flavorful
                pasta dish that features a rich tomato-based sauce with ground beef, vegetables, and fragrant herbs. Here's a
                recipe for Spaghetti Bolognese that you can try at home.
            </p>

            <div className='py-5 text-left mx-4'>
                <p>Instructions</p>
                <div className='flex-col px-8'>
                    <p>
                        - Heat oil in a large saucepan over medium-high heat.
                    </p>
                    <p>
                        - Add onion and garlic and cook until softened, about 5 minutes.
                    </p>
                    <p>
                        - Add ground beef and cook until browned, about 5-7 minutes.(optional)
                    </p>
                </div>
            </div>

            <div className='py-5 text-left mx-4'>
                <p>Ingridients</p>
                <div className='flex-col px-8'>
                    <p>
                        - Heat oil in a large saucepan over medium-high heat.
                    </p>
                    <p>
                        - Add onion and garlic and cook until softened, about 5 minutes.
                    </p>
                    <p>
                        - Add ground beef and cook until browned, about 5-7 minutes.(optional)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailPage