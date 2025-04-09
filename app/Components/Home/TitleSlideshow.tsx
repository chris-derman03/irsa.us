import { promises as fs } from "fs";
import OverlayBox from "../OverlayBox";
import Slideshow from "../Slideshow/Slideshow";
import Button from "../Interactivity/Button";

const TitleSlideshow = async () => {
    const file = await fs.readFile(
        process.cwd() + "/app/data/slideshow_home_images.json",
        "utf-8"
    );
    const images = JSON.parse(file).images;

    return (
        <>
            <OverlayBox>
                <Slideshow images={images} />
            </OverlayBox>
            <OverlayBox className="flex items-center justify-center pt-[100px]">
                <div className="flex flex-col items-center gap-10">
                    <p className="w-9/10 text-center text-4xl md:text-7xl">
                        Expert Witnesses Lawyers{" "}
                        <span className="italic">Trust</span>.
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-4 justify-items-center">
                        <Button text="Experts" />
                        <Button text="Services" />
                        <div className="col-span-2">
                            <Button text="Inquire" primary />
                        </div>
                    </div>
                </div>
            </OverlayBox>
        </>
    );
};

export default TitleSlideshow;
