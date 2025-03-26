"use client";
import { useEffect, useState } from "react";
import SlideshowContent from "./SlideshowContent";
import Tint from "../Tint";
import { shuffle } from "fast-shuffle";
import OverlayBox from "../OverlayBox";

interface Params {
    images: { path: string; desc: string }[];
    intervalDelay?: number;
    fadeDuration?: number;
}

const Slideshow = ({
    images,
    intervalDelay = 7000,
    fadeDuration = 3000,
}: Params) => {
    const [shuffledImages, setShuffledImages] = useState<
        { path: string; desc: string }[] | null
    >(null);
    const [index, setIndex] = useState(0);
    const [isFading, setFading] = useState(false);

    useEffect(() => {
        setShuffledImages(shuffle(images));
    }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFading(false);
            }, fadeDuration);
        }, intervalDelay);

        return () => clearInterval(interval);
    }, [images.length, fadeDuration, intervalDelay]);

    return (
        <div className="w-full h-full relative">
            <SlideshowContent
                images={shuffledImages}
                index={index}
                isFading={isFading}
            />
            <Tint />
        </div>
    );
};

export default Slideshow;
