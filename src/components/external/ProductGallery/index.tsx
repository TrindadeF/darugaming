"use client";

import React, { useRef, useState, useEffect } from 'react';

import { Swiper as SwiperClass } from 'swiper';

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs, Scrollbar } from 'swiper/modules';

import Image from "next/image";

import VideoImage from "@/assets/product-page/video-image.jpg";
import ProductImage01 from "@/assets/product-page/image-01.jpg";
import ProductImage02 from "@/assets/product-page/image-02.jpg";
import ProductImage03 from "@/assets/product-page/image-03.jpg";
import ProductImage04 from "@/assets/product-page/image-04.jpg";


export default function ProductGallery() {
    const swiperRef = useRef<SwiperRef | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [key, setKey] = useState<number>(0);

    const handleSlideClick = (index: number) => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            swiper.slideTo(index, 300); // Move para o slide clicado com 300ms de duração
            updateScrollbarPosition(swiper);
        }
    };


    // Função para atualizar a posição do scrollbar
    const updateScrollbarPosition = (swiper: SwiperClass) => {
        const scrollbar = swiper.scrollbar?.el;
        if (scrollbar) {
            const { scrollWidth, clientWidth } = scrollbar;
            const progress = swiper.progress;
            scrollbar.scrollLeft = (scrollWidth - clientWidth) * progress;
        }
    };

    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            swiper.on("slideChange", () => {
                updateScrollbarPosition(swiper);
            });
        }
    }, []);

    return (
        <div>
            <Swiper

                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "30px",
                    background: "rgba(49, 55, 66, 0.80)"
                } as React.CSSProperties}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs, Scrollbar]}

                className="mySwiper2 clip-path-element md:mb-8 mb-4 backdrop-blur-md"
                onSlideChange={() => {
                    setKey((prevKey) => prevKey + 1);
                }}
                slideToClickedSlide={true}
            >
                {/* Adicionar video Iframe */}
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            key={key}
                            className="w-full h-full absolute"
                            src={`https://www.youtube.com/embed/rn4qhWWfgCM?si=thODneP-A-PRtGQ-`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <Image src={ProductImage01} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <Image src={ProductImage02} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <Image src={ProductImage03} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <Image src={ProductImage04} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>

            {/* Miniaturas */}
            <Swiper
                ref={swiperRef}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={"auto"}
                // breakpoints={{
                //     640: {
                //       slidesPerView: 2,
                //       spaceBetween: 20,
                //     },
                //     768: {
                //       slidesPerView: 3,
                //       spaceBetween: 20,
                //     },
                //     1440: {
                //       slidesPerView: 3,
                //       spaceBetween: 20,
                //     },

                //     1920: {
                //         slidesPerView: 4,
                //         spaceBetween: 20,
                //     },
                //   }}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                className="mySwiper cursor-pointer"
                scrollbar={{
                    hide: false,
                    draggable: true,
                }}
                centeredSlides={false}
                slideToClickedSlide={true}

            >
                {[VideoImage, ProductImage01, ProductImage02, ProductImage03, ProductImage04].map((image, index) => (
                    <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
                        <Image src={image} className="clip-path-images" alt="" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
