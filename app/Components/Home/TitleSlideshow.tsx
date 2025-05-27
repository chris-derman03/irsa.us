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
      <OverlayBox className="flex items-center justify-center md:pt-[20vh]">
        <div className="flex flex-col items-center gap-10">
          <p className="w-9/10 font-bold text-center text-5xl md:text-7xl">
            Expert Witness Services for Attorneys
          </p>
          <p className="w-8/10 lg:w-5/10 text-center font-bold text-lg text-gray-400">
            We leverage Math, Physics, Science, Engineering, and Technology to
            uncover the truth and provide the answers you need for your case.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-4 justify-items-center">
            <Button text="Experts" href="/experts" />
            <Button text="Services" href="/services" />
            <div className="col-span-2">
              <Button text="Inquire" href="/contact" primary />
            </div>
          </div>
        </div>
      </OverlayBox>
    </>
  );
};

export default TitleSlideshow;
