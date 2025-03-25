import Slideshow from "./Components/Slideshow";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-[700px] relative">
                <Slideshow />
            </div>

            <h1>Help me</h1>
        </div>
    );
}
