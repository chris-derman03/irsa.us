import Panel from "./Components/Home/Panel";
import PanelDivider from "./Components/Home/PanelDivider";
import StatGauge from "./Components/Home/StatGauge";
import Button from "./Components/Interactivity/Button";
import OverlayBox from "./Components/OverlayBox";
import Slideshow from "./Components/Slideshow/Slideshow";
import "./Components/Home/HomeStyles.css";

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
        <div className="flex flex-col items-center gap-10">
            <div className="w-full h-[500px] md:h-screen relative">
                <OverlayBox>
                    <Slideshow images={images} />
                </OverlayBox>
                <OverlayBox className="flex items-center justify-center pt-[100px]">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-center">
                            Expert Witnesses Lawyers Trust.
                        </h1>
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 justify-items-center">
                            <Button text="Experts" />
                            <Button text="Services" />
                            <div className="col-span-2">
                                <Button text="Inquire" primary />
                            </div>
                        </div>
                    </div>
                </OverlayBox>
            </div>

            <Panel className="w-8/10 p-10 gap-10 xl:py-20">
                <StatGauge stat="Cases" value={15000} plus />
                <PanelDivider />
                <StatGauge stat="Years of Service" value={50} />
                <PanelDivider />
                <StatGauge stat="Lawyers" value={3000} plus />
            </Panel>

            <h2 className="w-[100px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                deleniti assumenda excepturi nesciunt obcaecati quaerat
                recusandae quam eveniet dolorum? Explicabo molestiae doloribus
                saepe voluptate, magni illum odio dolorum voluptatem tempore.
            </h2>
        </div>
    );
}
