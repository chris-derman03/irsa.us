import Image from "next/image";
import OverlayBox from "../OverlayBox";

interface Params {
  images: { path: string; desc: string }[] | null;
  index: number;
  isFading: boolean;
}

const SlideshowContent = ({ images, index, isFading }: Params) => {
  return (
    <>
      {images
        ? images.map((image, i) => (
            <OverlayBox key={"home_image_" + i}>
              <Image
                src={image.path}
                alt={image.desc}
                fill
                className="object-cover transition-opacity duration-3000 ease-in-out"
                style={{
                  opacity:
                    i === index
                      ? isFading
                        ? 0
                        : 1
                      : i === (index + 1) % images.length && isFading
                      ? 1
                      : 0,
                }}
              />
            </OverlayBox>
          ))
        : null}
    </>
  );
};

export default SlideshowContent;
