import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';
const Card = ({ recipe, handleCook }) => {
    const { recipe_image, recipe_name, short_description, calories, ingredients, preparing_time } = recipe
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-6 rounded-2xl h-full">
                <figure>
                    <img className="h-60 w-full rounded-2xl"
                        src={recipe_image}
                        alt="Shoes" />
                </figure>
                <div className="space-y-4 mt-4">
                    <h2 className="font-semibold text-xl">{recipe_name}</h2>
                    <p className="font-normal text-base text-[#150B2B99]">{short_description}</p>
                    <hr className=" text-[#150B2B99]" />
                    <h1 className="font-medium text-lg">Ingredients: {ingredients.length}</h1>
                    <ul className="pl-6">
                        {
                            ingredients.map((ingredient, i) => <li key={i} className=" text-[#150B2B99] list-disc">{ingredient}</li>)
                        }
                    </ul>
                    <hr className=" text-[#150B2B99]" />
                    <div className="flex gap-10 mb-6">
                        <span className="flex items-center gap-2.5  text-[#150B2B99]"><CiClock2 />{preparing_time}</span>
                        <span className="flex items-center gap-2.5  text-[#150B2B99]"><FaFire />{calories}</span>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleCook(recipe)} className="btn bg-[#0BE58A]  rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    recipe: PropTypes.object,
    handleCook: PropTypes.func
}

export default Card;