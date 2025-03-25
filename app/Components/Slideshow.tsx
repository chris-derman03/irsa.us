"use client";
import Image from "next/image";

interface Params {
    images: { path: string; desc: string }[];
}

const Slideshow = ({ images }: Params) => {
    return (
        <div className="w-full h-full absolute">
            <Image
                src={images[1].path}
                alt={images[1].desc}
                fill
                className="object-cover relative"
            />
            <div className="tint w-full h-full" />
        </div>
    );
};

export default Slideshow;
