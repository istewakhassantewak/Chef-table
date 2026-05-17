import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Cookings from "../Cookings/Cookings";

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([])
    const [currentCooking, setCurrentCooking] = useState([])
    useEffect(() => {
        fetch("/recipe.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, [])
    const handleCook = (cooking) => {
        const exists = cook.find(
            item => item.recipe_id === cooking.recipe_id
        );

        if (!exists) {
            setCook([...cook, cooking]);
        } else {
            toast.error("Recipe already added!!");
        }


    }
    const [time, setTime] = useState(0)
    const [caloriesf, setCalories] = useState(0)
    const currentCook = (cooking) => {
        const newCurrentCook = [...currentCooking, cooking]
        setCurrentCooking(newCurrentCook)
        const remaining = (cook.filter(remain => remain.recipe_id !== cooking.recipe_id))
        setCook(remaining)
        setTime(time + parseInt(cooking.preparing_time))
        setCalories(caloriesf + parseInt(cooking.calories))
    }
    return (
        <main className="text-black md:container mx-auto p-4">
            <section id="our-recipe">
                <div className="text-center space-y-4">
                    <h1 className="font-semibold text-4xl">Our Recipes</h1>
                    <p className="font-normal text-base text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />
                        urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6">
                    <Cards recipes={recipes} handleCook={handleCook}></Cards>
                    <Cookings time={time} caloriesf={caloriesf} cook={cook} currentCook={currentCook} currentCooking={currentCooking}></Cookings>
                </div>
            </section>
        </main>
    );
};

export default Recipe;