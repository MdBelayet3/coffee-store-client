import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, price, supplier, taste, category, details, photo } = coffee;
    console.log(_id);

    // function for handle add coffee 
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, price, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        // fetch for send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className=" max-w-[380px] lg:max-w-4xl mx-auto bg-[#F4F3F0] mt-5 p-4 lg:px-24 lg:py-16 space-y-4 lg:space-y-8">
            <h1 className="text-xl lg:text-5xl text-center text-[#374151]">Update a Coffee</h1>
            <p className='text-[#5F5E5E]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <form onSubmit={handleUpdateCoffee} className='flex flex-col gap-4'>
                {/* form name and price row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control lg:w-1/2 space-y-2">
                        <label className="label">
                            <span className="text-black">Name</span>
                        </label><br />
                        <input type="text" name='name' defaultValue={name} placeholder="Enter Coffee name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control space-y-2 lg:w-1/2">
                        <label className="label">
                            <span className="text-black">Price</span>
                        </label><br />
                        <input type="text" name='price' defaultValue={price} placeholder="Coffee price" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control lg:w-1/2 space-y-2">
                        <label className="label">
                            <span className="text-black">Supplier</span>
                        </label><br />
                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter Coffee supplier" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control space-y-2 lg:w-1/2">
                        <label className="label">
                            <span className="text-black">Taste</span>
                        </label><br />
                        <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form category and details row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control lg:w-1/2 space-y-2">
                        <label className="label">
                            <span className="text-black">Category</span>
                        </label><br />
                        <input type="text" name='category' defaultValue={category} placeholder="Enter Coffee category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control space-y-2 lg:w-1/2">
                        <label className="label">
                            <span className="text-black">Details</span>
                        </label><br />
                        <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form photo row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control w-full space-y-2">
                        <label className="label">
                            <span className="text-black">Photo</span>
                        </label><br />
                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>
                <button className='btn bg-[#D2B48C] mt-5 w-full hover:bg-yellow-200'><input type="submit" value="Update Coffee" /></button>
            </form>
            <NavLink to="/"><button className='btn mt-4 btn-primary'>Go home</button></NavLink>
        </div>
    );
};

export default UpdateCoffee;
