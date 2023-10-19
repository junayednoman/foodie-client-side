import { useLoaderData } from "react-router-dom";
import Banner from "../../sections/banner/Banner";
import Brand from "../brand/Brand";

const Home = () => {
    const brands = useLoaderData();
    console.log(brands);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <div className=" lg:py-30 md:py-24 py-14">
                    <div className="text-center mb-14">
                        <h3 className="text-3xl md:text-5xl font-foodie font-semibold">Our Renowned Brands</h3>
                    </div>
                    <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {
                            brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;