import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.png';
import Navbar from '../../sections/navbar/Navbar';
import Footer from '../../sections/footer/Footer';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-auto text-center mb-20'>
                <img className='mx-auto' src={errorImg} alt="" />
                <h2 className='lg:text-6xl md:text-4xl text-2xl font-medium mb-8'><span className='text-[#A4E889]'>Oops!</span> Page not found.</h2>
                <Link to='/' className='text-[#A4E889] underline'>Back to home</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;