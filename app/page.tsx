import PanelDivider from "./Components/Home/PanelDivider";
import TitleSlideshow from "./Components/Home/TitleSlideshow";
import "./Components/Home/HomeStyles.css";
import StatsBar from "./Components/Home/StatsBar";
import HomePageDescription from "./Components/Home/HomePageDescription";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="slideShowContainer w-full h-[500px] md:h-screen relative">
                <TitleSlideshow />
            </div>

            <div className="w-8/10 tintedPanel">
                <StatsBar />
            </div>

            <PanelDivider width={3} />

            <div className="w-8/10">
                <HomePageDescription />
            </div>
        </div>
    );
}
