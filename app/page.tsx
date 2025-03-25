import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-[700px] overflow-hidden relative">
                <Image
                    src="/image/home/edr.jpg"
                    alt={"home image"}
                    fill
                    className="object-cover"
                />
            </div>

            <h1>Help me</h1>
        </div>
    );
}
