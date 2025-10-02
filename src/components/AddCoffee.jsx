import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    // function for handle add coffee 
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, price, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // fetch for send data to server
        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className=" max-w-[380px] lg:max-w-4xl mx-auto bg-[#F4F3F0] mt-5 p-4 lg:px-24 lg:py-16 space-y-4 lg:space-y-8">
            <h1 className="text-xl lg:text-5xl text-center text-[#374151]">Add a Coffee</h1>
            <p className='text-[#5F5E5E]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee} className='flex flex-col gap-4'>
                {/* form name and price row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control lg:w-1/2 space-y-2">
                        <label className="label">
                            <span className="text-black">Name</span>
                        </label><br />
                        <input type="text" name='name' placeholder="Enter Coffee name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control space-y-2 lg:w-1/2">
                        <label className="label">
                            <span className="text-black">Price</span>
                        </label><br />
                        <input type="text" name='price' placeholder="Coffee price" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control lg:w-1/2 space-y-2">
                        <label className="label">
                            <span className="text-black">Supplier</span>
                        </label><br />
                        <input type="text" name='supplier' placeholder="Enter Coffee supplier" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control space-y-2 lg:w-1/2">
                        <label className="label">
                            <span className="text-black">Taste</span>
                        </label><br />
                        <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form category and details row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control lg:w-1/2 space-y-2">
                        <label className="label">
                            <span className="text-black">Category</span>
                        </label><br />
                        <input type="text" name='category' placeholder="Enter Coffee category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control space-y-2 lg:w-1/2">
                        <label className="label">
                            <span className="text-black">Details</span>
                        </label><br />
                        <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form photo row */}
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className="form-control w-full space-y-2">
                        <label className="label">
                            <span className="text-black">Photo</span>
                        </label><br />
                        <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>
                <button className='btn bg-[#D2B48C] mt-5 w-full hover:bg-yellow-200'><input type="submit" value="Add Coffee" /></button>
            </form>
        </div>
    );
};

export default AddCoffee;
