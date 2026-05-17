import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Cookings from "../Cookings/Cookings";

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([])
    useEffect(() => {
        fetch("/recipe.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, [])
    const handleCook = (cooking) => {
        const newCook = [...cook, cooking]
        setCook(newCook)

    }
    return (
        <main className="text-black md:container mx-auto p-4">
            <section>
                <div className="text-center space-y-4">
                    <h1 className="font-semibold text-4xl">Our Recipes</h1>
                    <p className="font-normal text-base text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />
                        urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>

                <div className="grid grid-cols-2 mt-12 gap-6">
                    <Cards recipes={recipes} handleCook={handleCook}></Cards>
                    <Cookings cook={cook}></Cookings>
                </div>
            </section>
        </main>
    );
};

export default Recipe;