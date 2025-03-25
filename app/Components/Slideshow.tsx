import Image from "next/image";

const Slideshow = () => {
    return (
        <div className="w-full h-full absolute">
            <Image
                src="/image/home/edr.jpg"
                alt={"home image"}
                fill
                className="object-cover relative"
            />
            <div className="tint w-full h-full" />
        </div>
    );
};

export default Slideshow;
