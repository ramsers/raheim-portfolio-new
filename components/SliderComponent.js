"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SliderComponent({ images = [], direction = "horizontal" }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Swiper && swiperRef.current) {
            new window.Swiper(swiperRef.current, {
                direction,
                loop: true,
                pagination: { el: swiperRef.current.querySelector(".swiper-pagination"), clickable: true },
                navigation: {
                    nextEl: swiperRef.current.querySelector(".swiper-button-next"),
                    prevEl: swiperRef.current.querySelector(".swiper-button-prev"),
                },
                scrollbar: { el: swiperRef.current.querySelector(".swiper-scrollbar"), draggable: true },
            });
        }
    }, [images, direction]);

    return (
        <div className="swiper w-full" ref={swiperRef}>
            <div className="swiper-wrapper">
                {images.map((src, idx) => (
                    <div className="swiper-slide" key={idx}>
                        <Image
                            aria-hidden
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            width={1000}
                            height={1000}
                            className="rounded-md"
                        />
                    </div>
                ))}
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div>
        </div>
    );
}
