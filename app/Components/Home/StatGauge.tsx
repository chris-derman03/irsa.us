import { FaPlus } from "react-icons/fa";

interface Params {
    stat: string;
    value: number;
    plus?: boolean;
    icon?: React.ReactElement | null;
}

const StatGauge = ({ stat, value, plus = false, icon = null }: Params) => {
    return (
        <div className="flex flex-col items-center gap-7 xl:gap-10">
            <div className="gauge">
                <div className="w-8/10 flex flex-col items-center 2xl:gap-2">
                    <p className="flex items-center text-3xl 2xl:text-5xl">
                        {value}
                        {plus && <FaPlus size={17} />}
                    </p>
                    <p className="text-center text-wrap leading-6 text-lg 2xl:text-3xl">
                        {stat}
                    </p>
                </div>
            </div>
            {icon}
        </div>
    );
};

export default StatGauge;
