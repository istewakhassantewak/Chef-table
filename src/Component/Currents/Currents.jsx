import Current from "../Current/Current";

const Currents = ({ time, caloriesf, currentCooking }) => {
    return (
        <div className=" space-y-5 mt-9">
            <h1 className="font-semibold text-2xl text-center">Currently cooking: {currentCooking.length}</h1>
            <hr className="text-[#150B2B99]" />
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentCooking.map((details, i) => <Current key={i} time={time} caloriesf={caloriesf} details={details} i={i + 1}></Current>)
                        }
                        <tr className="text-[#150B2B99] font-bold bg-[#28282808] rounded-2xl">
                            <th></th>
                            <td></td>
                            <td>Total Time = {time}</td>
                            <td>Total Calories = {caloriesf}</td>

                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};
export default Currents;
