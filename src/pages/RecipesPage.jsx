import React, { useEffect } from 'react';
import "wired-elements";
import RecipeCardComponent from '../components/RecipeCardComponent';

const RecipesPage = () => {
    return (
        <div className="justify-center md:px-5 lg:px-16">
            <div className="flex flex-row justify-center text-gray-600">
                <wired-search-input placeholder="Search here" class="w-2/4 justify-center">
                </wired-search-input>
            </div>

            <div className="flex flex-col gap-2">
                <RecipeCardComponent />
            </div>
        </div>
    )
}

export default RecipesPage