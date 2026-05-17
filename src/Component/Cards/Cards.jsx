import Card from "../Card/Card";
import PropTypes from 'prop-types';
const Cards = ({ recipes, handleCook }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                recipes.map(recipe => <Card key={recipe.recipe_id} recipe={recipe} handleCook={handleCook}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    recipes: PropTypes.array,
    handleCook: PropTypes.func
}
export default Cards;