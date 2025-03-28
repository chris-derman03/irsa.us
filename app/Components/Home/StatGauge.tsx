import { FaPlus } from "react-icons/fa";

interface Params {
    stat: string;
    value: number;
    plus?: boolean;
}

const StatGauge = ({ stat, value, plus = false }: Params) => {
    return (
        <div className="gauge">
            <div className="w-8/10 flex flex-col items-center 2xl:gap-2">
                <h2 className="flex items-center 2xl:text-5xl!">
                    {value}
                    {plus && <FaPlus size={17} />}
                </h2>
                <p className="text-center text-wrap leading-6 text-lg 2xl:text-3xl!">
                    {stat}
                </p>
            </div>
        </div>
    );
};

export default StatGauge;
