import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee }) => {

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
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                console.log("delete confirmed")
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
                <button className="btn bg-[#3C393B] btn-primary tooltip" data-tip="Update"><FaEdit></FaEdit></button>
                <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] btn-primary tooltip" data-tip="Delete"><FaDeleteLeft></FaDeleteLeft></button>
            </div>
        </div>
    );
};


export default CoffeeCard;