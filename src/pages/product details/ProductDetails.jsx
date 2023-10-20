import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../auth provider/AuthProvider";


const ProductDetails = () => {
    const product = useLoaderData();
    const { name, brandName, type, price, rating, description, image } = product;
    const { user } = useContext(AuthContext)
    const userEmail = user.email;

    const handleAddToCart = () => {
        const cartData = { name, brandName, type, price, rating, description, image, userEmail };
        fetch('http://localhost:5000/cart', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                data.acknowledged && toast(`Product added to cart successfully`);

            })
    }

    return (
        <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3 md:my-24 my-10 md:mt-8 mt-4">
            <div className=" border shadow md:pr-12 pr-6 p-3 grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="lg:p-0 p-0 px-1 pb-1 md:py-5 ">
                    <h4 className="md:text-3xl text-xl font-semibold font-foodie mb-3">{name}</h4>
                    <p><span className="font-semibold">Price: </span>${price}</p>
                    <p><span className="font-semibold">Rating: </span>{rating}</p>
                    <p><span className="font-semibold">Brand Name: </span>{brandName}</p>
                    <p><span className="font-semibold">Type: </span>{type}</p>
                    <p className="mt-2 md:text-base text-sm">{description}</p>
                    <button onClick={handleAddToCart} className='py-3 px-6 bg-[#A4E889] md:text-base text-sm font-medium hover:bg-transparent hover:text-[#A4E889] border border-[#A4E889] duration-300 lg:mt-8 md:mt-5 mt-4'>Add To Cart</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;