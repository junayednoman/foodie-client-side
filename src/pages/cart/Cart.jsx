import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AuthContext } from "../../auth provider/AuthProvider";


const Cart = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user.email;


    useEffect(() => {
        fetch(`http://localhost:5000/cart/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const handleItemDelete = id => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    toast('Item deleted successfully')
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                }
            })
    };


    // get total price of the products
    let totalPrice = 0;
    for (const product of products) {
        totalPrice += parseFloat(product.price);

    }

    return (
        <div className="lg:my-24 lg:mt-8 mt-5 md:my-20 py-10">
            <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3">
                <div className="border-y border-x-2">
                    {
                        products.map(product => <div key={product._id}>
                            <div className="grid grid-cols-2 md:grid-cols-4 py-3 items-center border-y md:p-5 p-0 pr-3 ">
                                <div>
                                    <img className="w-32" src={product.image} alt="" />
                                </div>
                                <div>
                                    <h5 className="text-center font-semibold font-foodie text-lg md:text-xl">{product.name}</h5>
                                </div>
                                <div>
                                    <p className="text-center font-medium text-base md:text-lg">${product.price}</p>
                                </div>
                                <div className="text-right mr-0 md:mr-5" onClick={() => handleItemDelete(product._id)}>
                                    <button className="font-semibold text-xl p-2 px-3"><RiDeleteBin6Line /></button>
                                </div>
                            </div>

                        </div>)
                    }
                    <div className="border-y p-6 px-9 grid grid-cols-2">
                        <h2 className="text-lg md:text-xl"><span className="font-semibold">Product Quantity:</span> {products.length}</h2>
                        <h2 className="text-lg md:text-xl"><span className="font-semibold">Total Price: </span>$ {totalPrice}</h2>



                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;