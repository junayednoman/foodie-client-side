import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';


import 'swiper/css';
import ad1 from '../../assets/ad1.jpg';
import ad2 from '../../assets/ad2.jpg';
import ad3 from '../../assets/ad3.jpg';
import { Link } from "react-router-dom";

const BrandBanner = () => {
    return (
        <div>
            <Swiper
                className="mySwiper"
                spaceBetween={30}
                autoplay={{
                    delay: 2300,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <Link>
                        <img src={ad1} alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <img src={ad2} alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <img src={ad3} alt="" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BrandBanner;