import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const product = { name, brandName, type, price, rating, description, image }

        fetch('https://brand-store-server-eosin.vercel.app/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast('Product has been added successfully!')
            })
    }
    return (
        <div>
            <div className="max-w-7xl lg:mx-auto md:mx-9 mx-0 lg:py-30 md:py-14 py-8 md:p-16 mt-8 p-3 mb-14 bg-[#A4E889]">
                <h3 className="text-center mb-5 md:mb-12 text-3xl md:text-5xl font-foodie font-semibold">Add Product</h3>
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="name">Name</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="name" id="name" placeholder="Enter product name" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="brandName">Brand Name</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="brandName" id="brandName" placeholder="Enter brandName" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="type">Type</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="type" id="type" placeholder="Enter product type" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="price">Price</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="price" id="price" placeholder="Enter product price" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="description">Short Description</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="description" id="description" placeholder="Enter product description" />
                        </div>
                        <div className="mb-2 md:col-span-1 col-span-2">
                            <label htmlFor="rating">Rating</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="rating" id="rating" placeholder="Enter product rating" />
                        </div>
                        <div className="col-span-2 mb-2">
                            <label htmlFor="image">Product Image</label>
                            <input className="w-full h-10 px-4 mt-2" type="text" name="image" id="image" placeholder="Enter product image" />
                        </div>
                        <button className="col-span-2">
                            <input className="w-full cursor-pointer py-3 bg-[#FEC148]" type="submit" value="Add Product" />
                        </button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
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