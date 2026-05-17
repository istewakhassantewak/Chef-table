import Cooking from "../Cooking/Cooking";

const Cookings = ({ cook }) => {

    return (
        <div className="bg-base-100 shadow-sm p-6 rounded-2xl">
            <div className=" space-y-5">
                <h1 className="font-semibold text-2xl text-center">Want to cook: {cook.length}</h1>
                <hr className="text-[#150B2B99]" />
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            cook.map((details, i) => <Cooking key={i} details={details} i={i + 1}></Cooking>)
                        }
                    </table>
                </div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default Cookings;