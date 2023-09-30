import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useParams} from "react-router-dom";
import {useForecast} from "../../hooks/useForecast";

const Forecast = ({ isMetric } : { isMetric: boolean }) => {
    const { city } = useParams<string>();
    const [forecast] = useForecast(city, isMetric);

    return (
        <Swiper
            className="!py-4"
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
                640: {
                    width: 640,
                    slidesPerView: 4,
                },
                768: {
                    width: 768,
                    slidesPerView: 5,
                },
                991: {
                    width: 991,
                    slidesPerView: 6,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 6,
                }
        }}>
            {
                forecast && forecast.list?.map((item: any, i: number) => (
                    <SwiperSlide key={i.toString()}>
                        <div className="flex flex-col shadow-lg justify-center bg-[#f6f6f8] rounded-[20px] p-[15px] w-full text-[15px] text-center select-none">
                            <div>{(new Date(item.dt * 1000)).toLocaleString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            })}</div>
                            <img
                                className="max-w-[80px] w-full my-2 mx-auto"
                                src={require('../../assets/images/' + item.weather?.[0]?.icon + '.png')}
                                alt={item.weather?.[0]?.description}/>
                            <div className="text-[18px] font-bold">
                                <span>{parseInt(item.main?.temp)} {isMetric ? '°C' : '°F'}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default Forecast;