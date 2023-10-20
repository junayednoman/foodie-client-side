import aboutImg from '../../assets/man with vegitable.jpg'


const About = () => {
    return (
        <div>
            <div className='grid grid-rows-1 md:grid-cols-5 gap-0 md:gap-20 items-center max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3 lg:py-30 md:py-24 py-14 pb-0'>
                <div className='col-span-3'>
                    <h3 className='text-3xl md:text-5xl font-foodie font-semibold md:mb-5 mb-2'>About Us</h3>
                    <p className=' md:text-base text-sm'>At Foodie, we are passionate about bringing you the freshest and most delectable fruits and vegetables from nature's bounty. Our journey began with a simple belief in the power of wholesome, natural foods to transform lives.</p>
                    <p className='mt-3 md:text-base text-sm'>We work closely with local farmers and trusted suppliers who share our commitment to quality, sustainability, and ethical practices. Our mission is to provide you with the finest produce, whether it is for everyday meals, special occasions, or your journey to a healthier lifestyle. </p>
                </div>
                <div className='col-span-5 md:mt-0 mt-8 md:col-span-2'>
                    <img className='w-full' src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;