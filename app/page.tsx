import Slideshow from "./Components/Slideshow/Slideshow";

const images = [
    { path: "/image/home/biomechanics.jpg", desc: "Biomechanical Analysis" },
    { path: "/image/home/drone.jpg", desc: "Drone Scanning" },
    { path: "/image/home/edr.jpg", desc: "Crash Data Retrieval" },
    { path: "/image/home/industrial.jpg", desc: "Site 3D Scanning" },
    { path: "/image/home/scanner3d.jpg", desc: "3D Scanning" },
    { path: "/image/home/simulation.jpg", desc: "Accident Simulation" },
    { path: "/image/home/hardware.jpg", desc: "Computer Hardware Forensics" },
    { path: "/image/home/digital.jpg", desc: "Digital Forensics" },
];

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-screen relative">
                <Slideshow images={images} />
            </div>

            <h1 className="w-[100px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                deleniti assumenda excepturi nesciunt obcaecati quaerat
                recusandae quam eveniet dolorum? Explicabo molestiae doloribus
                saepe voluptate, magni illum odio dolorum voluptatem tempore.
            </h1>
        </div>
    );
}
