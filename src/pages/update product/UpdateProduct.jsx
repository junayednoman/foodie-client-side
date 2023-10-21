import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../auth provider/AuthProvider";

const UpdateProduct = () => {
    const { hello } = useContext(AuthContext)
    const productForUpdate = useLoaderData();

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const product = { name, brandName, type, price, rating, image }

        fetch(`https://brand-store-server-eosin.vercel.app/products/${productForUpdate.brandName}/${productForUpdate._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    toast('Product has been updated successfully!')
                }
            })
    }
    return (
        <div>
            <div className="max-w-7xl lg:mx-auto md:mx-9 mx-0 lg:py-30 md:py-14 py-8 md:p-16 mt-8 p-3 mb-14 bg-[#A4E889]">
                <h3 className="text-center mb-5 md:mb-12 text-3xl md:text-5xl font-foodie font-semibold">Update {hello} Product</h3>
                <form onSubmit={handleUpdateProduct}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="name">Name</label>
                            <input defaultValue={productForUpdate.name} className="w-full h-10 px-4 mt-2" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="brandName">Brand Name</label>
                            <input defaultValue={productForUpdate.brandName} className="w-full h-10 px-4 mt-2" type="text" name="brandName" id="brandName" placeholder="Enter brandName" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="type">Type</label>
                            <input defaultValue={productForUpdate.type} className="w-full h-10 px-4 mt-2" type="text" name="type" id="type" placeholder="Enter product type" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="price">Price</label>
                            <input defaultValue={productForUpdate.price} className="w-full h-10 px-4 mt-2" type="text" name="price" id="price" placeholder="Enter product price" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="rating">Rating</label>
                            <input defaultValue={productForUpdate.rating} className="w-full h-10 px-4 mt-2" type="text" name="rating" id="rating" placeholder="Enter product rating" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="image">Product Image</label>
                            <input defaultValue={productForUpdate.image} className="w-full h-10 px-4 mt-2" type="text" name="image" id="image" placeholder="Enter product image" />
                        </div>
                        <button className="col-span-2">
                            <input className="w-full cursor-pointer py-3 bg-[#FEC148]" type="submit" value="Update Product" />
                        </button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UpdateProduct;