"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Params {
    images: { path: string; desc: string }[];
    intervalDelay?: number;
}

const Slideshow = ({ images, intervalDelay = 5000 }: Params) => {
    const [index, setIndex] = useState(0);
    const [isFading, setFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFading(false);
            }, 2000);
        }, intervalDelay);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative">
            <div className="flex w-full h-full absolute">
                {images.map((image, i) => (
                    <Image
                        src={image.path}
                        alt={image.desc}
                        fill
                        className="object-cover slideshowImage"
                        style={{
                            opacity:
                                i === index
                                    ? isFading
                                        ? 0
                                        : 1
                                    : i === (index + 1) % images.length &&
                                      isFading
                                    ? 1
                                    : 0,
                        }}
                        key={"home_image_" + i}
                    />
                ))}
            </div>

            <div className="tint w-full h-full absolute" />
        </div>
    );
};

export default Slideshow;
