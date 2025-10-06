import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, price, supplier, photo } = coffee;

    // handle delete function
    const handleDelete = _id => {
        console.log(_id);
        // sweet alert code
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remainingCoffees)
                    })
            }
        });
    }

    return (
        <div className="flex justify-between items-center bg-[#F5F4F1] p-7 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Coffee" />
            </figure>
            <div className="space-y-3">
                <h2 className="card-title">Name: {name}</h2>
                <p>Supplier: {supplier}</p>
                <p>Price: {price}</p>
            </div>
            <div className="flex flex-col gap-3">
                <button className="btn text-white tooltip bg-[#D2B48C]" data-tip="Details"><FaEye></FaEye></button>
                <Link to={`/updateCoffee/${_id}`}><button className="btn bg-[#3C393B] btn-primary tooltip" data-tip="Update"><FaEdit></FaEdit></button></Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] btn-primary tooltip" data-tip="Delete"><FaDeleteLeft></FaDeleteLeft></button>
            </div>
        </div>
    );
};


export default CoffeeCard;
