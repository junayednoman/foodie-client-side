import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { brandName, imgUrl } = brand;
    return (
        <div>
            <Link to={`/brand-details/${brandName}`}>
                <div className='relative' style={{ backgroundImage: `url(${imgUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className='w-full h-[180px] md:h-[250px] text-white md:px-8 px-4' style={{ backgroundColor: 'rgba(0, 0, 0, .4)' }}>
                        <div className='absolute left-4 top-4'>
                            <h2 className=' text-2xl md:text-2xl font-foodie font-bold'>{brandName}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
}

export default Brand;