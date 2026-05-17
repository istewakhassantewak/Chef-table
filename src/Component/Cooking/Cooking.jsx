const Cooking = ({ details, i, currentCook }) => {
    return (
        <tbody>

            <tr className="text-[#150B2B99] bg-[#28282808] rounded-2xl">
                <th>{i}</th>
                <td>{details.recipe_name}</td>
                <td>{details.preparing_time}</td>
                <td>{details.calories}</td>
                <td><button onClick={() => currentCook(details)} className="btn bg-[#0BE58A]  rounded-full">Preparing</button></td>
            </tr>
        </tbody>
    );
};

export default Cooking;