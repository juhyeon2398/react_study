import React from "react";
import { DataImg } from "./DataImg";
import MainVisual from "./MainVisual";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Main =({DataImg})=>{
    return (
        <article className="mainWrap">
            <Swiper 
                direction={'vertical'}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination,Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide><MainVisual/></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </article>
    )
}

export default Main;