import React from 'react'
import "wired-elements"

const RecipeCardComponent = () => {
    return (
        <div className='flex w-full my-10'>
            <wired-card elevation="3" className="px-5 py-6">
                <span className="font-bold text-xl mx-4 my-8">Spaghetti Bolognese</span>

                <p className="m-4 text-justify">
                    Spaghetti Bolognese is a classic Italian dish that is popular all over the world. It's a hearty and flavorful
                    pasta dish that features a rich tomato-based sauce with ground beef, vegetables, and fragrant herbs. Here's a 
                    recipe for Spaghetti Bolognese that you can try at home.
                </p>

                <div className="m-4">
                    <wired-button elevation="3">
                        <a href="/recipe/1">View More</a>
                    </wired-button>
                </div>
            </wired-card>
        </div>
    );
}

export default RecipeCardComponent