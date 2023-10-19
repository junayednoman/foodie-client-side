
const Banner = () => {
    return (
        <div className='' style={{ backgroundImage: `url(https://i.postimg.cc/W4RTmxrW/banner-bg.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="lg:py-[200px] md:py-32 py-14" style={{ backgroundColor: 'rgba(0, 0, 0, .2)' }}>
                <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3 grid grid-cols-5">
                    <div className=" md:col-span-4 col-span-5 lg:col-span-3">
                        <h1 className="text-[#A4E889] font-foodie font-extrabold md:text-7xl text-[40px] leading-[55px] md:leading-[75px]">Foodie:</h1>
                        <h1 className="text-white font-foodie font-extrabold md:text-5xl text-3xl leading-[45px] md:leading-[75px]">Tha Garden of Freshest Fruits and Crispest Vegetables</h1>
                        <p className="text-white mt-4 mb-7 text-sm md:text-base"> We are dedicated to bringing you the most delectable fruits and vegetables, lovingly cultivated to enhance your well-being and delight your palate.</p>
                        <button className="py-[14px] px-8 bg-transparent font-medium text-base border border-[#A4E889] hover:bg-[#A4E889] hover:text-black text-[#A4E889] duration-300">Explore The Garden</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;