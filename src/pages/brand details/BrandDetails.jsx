import { useLoaderData, useParams } from "react-router-dom";
import BrandBanner from "../../sections/brand banner/BrandBanner";
import Products from "../../sections/products/Products";
import noDataImg from '../../assets/no data.png'


const BrandDetails = () => {
    const products = useLoaderData();
    const brandName = useParams();
    return (
        <div>
            <div>
                <BrandBanner></BrandBanner>
            </div>
            <div className="lg:py-28 md:py-20 py-14 max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3">
                <div>
                    <h3 className='text-3xl md:text-5xl font-foodie font-semibold md:mb-5 mb-4'>Products of: {brandName.brandName}</h3>



                    {
                        products.length == 0 ? <div className="text-center md:mt-14 mt-5">
                            <img className="mx-auto" src={noDataImg} />
                            <h4 className="text-2xl md:text-4xl font-foodie font-semibold md:mb-5 mb-4 text-center mt-8">Oops! This brand has no product right now.</h4>
                        </div> :
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
                                {
                                    products?.map(product => <Products key={product._id} product={product}></Products>)
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;