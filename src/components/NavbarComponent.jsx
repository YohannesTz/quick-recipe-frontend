import React from 'react'

export const NavbarComponent = () => {
    return (
        <nav>
            <div className="px-10">
                <div class="relative flex items-center justify-between h-16">
                    <div class="flex-shrink-0">
                        <a href="/"><span class="font-semibold text-xl tracking-tight">Quick Recipe</span></a>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <a href="/recipies" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Recipies
                            </a>
                            <wired-button elevation="2">
                                <a href="/post">Post</a>
                            </wired-button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}