"use client";
import { useEffect, useState } from "react";
import SlideshowContent from "./SlideshowContent";
import Tint from "../Tint";

interface Params {
    images: { path: string; desc: string }[];
    intervalDelay?: number;
    fadeDuration?: number;
}

const Slideshow = ({
    images,
    intervalDelay = 7000,
    fadeDuration = 5000,
}: Params) => {
    const [index, setIndex] = useState(0);
    const [isFading, setFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFading(false);
            }, fadeDuration);
        }, intervalDelay);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative">
            <SlideshowContent
                images={images}
                index={index}
                isFading={isFading}
            />

            <Tint />
        </div>
    );
};

export default Slideshow;
