import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Products = ({ product }) => {
    const { name, brandName, type, price, rating, image, _id } = product;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-1 gap-0 items-center border border-[#A4E889] md:p-2 p-4'>
            <div className='text-left md:text-center'>
                <img src={image} alt="" />

            </div>
            <div>
                <h4 className='font-semibold text-lg md:text-xl'>{name}</h4>
                <p><span className='font-semibold'>Price:</span> ${price}</p>
                <p><span className='font-semibold'>Rating:</span> {rating}</p>
                <p><span className='font-semibold'>Brand name:</span> {brandName}</p>
                <p><span className='font-semibold'>Type:</span> {type}</p>

                <div className='flex gap-3 mt-5'>
                    <Link to={`/products/${brandName}/${_id}`} className='py-3 px-6 bg-[#A4E889] md:text-base text-sm font-medium hover:bg-transparent hover:text-[#A4E889] border border-[#A4E889] duration-300'>View Details</Link>
                    <Link to={`/update-product/${brandName}/${_id}`} className='py-3 px-6 bg-[#A4E889] md:text-base text-sm font-medium hover:bg-transparent hover:text-[#A4E889] border border-[#A4E889] duration-300'>Update</Link>
                </div>
            </div>
        </div>
    );
};

Products.propTypes = {
    product: PropTypes.object
}

export default Products;