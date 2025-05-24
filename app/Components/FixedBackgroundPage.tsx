import Tint from "@/app/Components/Tint";
import Image from "next/image";
import Footer from "@/app/Components/Footer/Footer";

interface Props {
  src: string;
  alt: string;
  alpha?: number;
  content: React.ReactNode;
}

const FixedBackgroundPage = ({ src, alt, alpha = 0.55, content }: Props) => {
  return (
    <>
      <div className="fixed w-full h-screen -z-10">
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        )}
        <Tint alpha={alpha} />
      </div>

      <div className="absolute w-full flex flex-col items-center justify-between gap-15">
        <div className="min-h-screen w-full">{content}</div>
        <Footer />
      </div>
    </>
  );
};

export default FixedBackgroundPage;
