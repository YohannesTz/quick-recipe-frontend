import React, { useEffect, useState } from 'react';
import "wired-elements";
import RecipeCardComponent from '../components/RecipeCardComponent';

const RecipesPage = () => {
    const token = localStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([])
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        
    }, [query]);
    
    return (
        <div className="justify-center md:px-5 lg:px-16 sm:px-5">
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