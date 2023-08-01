import React from "react";
import Lottie from "lottie-react";
import "wired-elements";
import lottie_one from "../assets/lottie_1.json";
import lottie_two from "../assets/lottie_2.json";
import lottie_three from "../assets/lottie_3.json";

const style = {
    height: 400,
    width: 350,
};

const style_two = {
    height: 400,
    width: 400,
};


const HomePage = () => {
    return (
        <div className="justify-center md:px-5 lg:px-16 bg-gray-900">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center">
                <div className="text-gray-300 text-left whitespace-break-normal ">
                    <p className="text-4xl sm:text-3xl py-5">
                        Delicious Recipes for Every Occasion
                    </p>

                    <p className="text-lg">
                        From quick and easy meals to gourmet dishes, our recipe website has everything you need to impress your
                        guests or simply enjoy a delicious meal at home. Browse our collection of mouth-watering recipes and
                        find inspiration for breakfast, lunch, dinner, and dessert.
                    </p>
                    <div className="flex flex-row my-6">
                        <div>
                            <wired-button elevation="2">
                                <a href="/recipies">Recipies</a>
                            </wired-button>
                        </div>
                    </div>
                </div>
                <div>
                    <Lottie
                        animationData={lottie_one}
                        style={style}
                        loop={false}
                    />
                </div>
            </div>

            <div>
                <div className="py-20">
                    <p className="text-4xl sm:text-3xl text-center text-gray-300 py-5">
                        Why Us?
                    </p>
                    <div className="grid lg:grid-cols-3 gap-2 bg-gray-900">
                        <wired-card elevation="3" className="px-5 py-6" fill="white">
                            <span className="font-bold text-xl mx-2">Curated</span>

                            <p className="m-2 text-justify">
                                Curated by a team of experienced chefs and food enthusiasts.
                                We search high and low for the best recipes from around the world, and test each one in our
                                own kitchens to ensure that it meets our rigorous standards for taste, simplicity, and nutritional value.
                            </p>
                        </wired-card>

                        <wired-card elevation="3" className="px-5 py-6">
                            <span className="font-bold text-xl mx-2">Easy</span>

                            <p className="m-2 text-justify">
                                We believe that anyone can be a great cook with the right guidance. That's why our recipes come with detailed,
                                step-by-step instructions that are easy to follow, even if you're a beginner in the kitchen.
                            </p>
                        </wired-card>

                        <wired-card elevation="3" className="px-5 py-6">
                            <span className="font-bold text-xl mx-2">Variety</span>

                            <p className="m-2 text-justify">
                                We offer a wide variety of recipes to suit every taste and occasion. Whether you're looking for vegetarian,
                                gluten-free, low-carb, or high-protein options, we have something for everyone. We also feature recipes from
                                different cuisines, so you can explore new flavors and cultures from the comfort of your own kitchen.
                            </p>
                        </wired-card>
                    </div>
                </div>
            </div>

            <div className="py-2">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 py-5 gap-2 place-items-center">
                    <div className="text-gray-300 text-left whitespace-break-normal ">
                        <p className="text-2xl py-4">Our Philosophy</p>
                        <p>
                            At Quick Recipe, our philosophy is rooted in the belief that cooking is not just a necessity, but a creative
                            and enjoyable experience. We believe that everyone, regardless of their culinary expertise, should have access
                            to delicious and nutritious recipes that inspire them to explore new flavors and techniques. Our platform is
                            designed to empower home cooks of all skill levels, providing them with the tools and resources they need to
                            confidently create memorable meals in their own kitchens.
                        </p>
                    </div>
                    <div>
                        <Lottie
                            animationData={lottie_three}
                            loop={true}
                            style={style_two}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 py-5 place-items-center">
                    <div>
                        <Lottie
                            animationData={lottie_two}
                            loop={true}
                            style={style_two}
                        />
                    </div>
                    <div className="text-gray-300 text-left whitespace-break-normal ">
                        <p className="text-2xl py-4">Our Commitment</p>
                        <p>
                            At Recipe Website Name, We are committed to promoting the use of fresh, high-quality ingredients
                            in our recipes. We believe that the quality of ingredients directly impacts the taste and nutritional
                            value of a dish. That's why we carefully select and curate recipes that prioritize fresh produce,
                            seasonal ingredients, and sustainable food choices. We aim to inspire our users to make conscious decisions
                            about the ingredients they use, supporting local farmers and reducing their environmental impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;