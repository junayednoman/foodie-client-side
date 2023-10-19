
const AddProduct = () => {
    return (
        <div>
            <h2>Add Product</h2>
            <div>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input className="w-full h-10" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div>
                            <label htmlFor="brand-name">Brand Name</label>
                            <input className="w-full h-10" type="text" name="brand-name" id="brand-name" placeholder="Enter brand-name" />
                        </div>
                        <div>
                            <label htmlFor="name">Type</label>
                            <input className="w-full h-10" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div>
                            <label htmlFor="name">Price</label>
                            <input className="w-full h-10" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div>
                            <label htmlFor="name">Short Description</label>
                            <input className="w-full h-10" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div>
                            <label htmlFor="name">Rating</label>
                            <input className="w-full h-10" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="name">Product Image</label>
                            <input className="w-full h-10" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <button className="col-span-2">
                            <input className="w-full cursor-pointer py-3 bg-red-300" type="submit" value="Add Product" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Image
// Name
// Brand Name
// Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
// Price
// Short description
// Rating
// Add button

export default AddProduct;