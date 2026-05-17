const Current = ({ details, i }) => {
    return (


        <tr className="text-[#150B2B99] bg-[#28282808] rounded-2xl">
            <th>{i}</th>
            <td>{details.recipe_name}</td>
            <td>{details.preparing_time}</td>
            <td>{details.calories}</td>

        </tr>


    );
};

export default Current;