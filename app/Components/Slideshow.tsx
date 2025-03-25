"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Params {
    images: { path: string; desc: string }[];
    intervalDelay?: number;
}

const Slideshow = ({ images, intervalDelay = 5000 }: Params) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, intervalDelay);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative">
            <div className="flex w-full h-full absolute">
                <Image
                    src={images[index].path}
                    alt={images[index].desc}
                    height={200}
                    width={800}
                    className="object-cover"
                />
                <Image
                    src={images[(index + 1) % images.length].path}
                    alt={images[(index + 1) % images.length].desc}
                    height={200}
                    width={800}
                    className="object-cover"
                />
            </div>

            <div className="tint w-full h-full absolute" />
        </div>
    );
};

export default Slideshow;
