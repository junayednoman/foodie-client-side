import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import quoteImg from '../../assets/close.png';
import manImg from '../../assets/man.jpg'

const Testimonial = () => {
    return (
        <div className="" style={{ backgroundImage: `url(https://i.postimg.cc/9MbHfgqp/top-view-colorful-fruits-vegetables.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="md:py-32 py-20" style={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}>
                <div className="max-w-7xl lg:px-10 px-0 lg:mx-auto md:mx-9 mx-3">
                    <Swiper className="mySwiper">
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">John</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">Smith</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">Sakib</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">Junayed</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">Sabbir</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">Rashid</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-center text-white">
                            <img className="md:w-[140px] w-[100px] rounded-full mx-auto" src={manImg} alt="" />
                            <p className="lg:mx-44 mx-0 text-lg md:text-2xl italic my-6 md:my-10">{"The fruits and vegetables here are a game-changer! They're incredibly fresh, bursting with flavor, and have transformed the way I eat. I can't imagine my meals without them now."}</p>
                            <img className="w-20 mx-auto" src={quoteImg} alt="" />
                            <h4 className="md:text-4xl text-2xl font-bold font-foodie mt-4 md:mt-7 mb-3">Sadikul</h4>
                            <h6 className="md:text-xl text-lg">One of 1000+ very happy customers</h6>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;