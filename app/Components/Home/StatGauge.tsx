import { FaPlus } from "react-icons/fa";

interface Params {
    stat: string;
    value: number;
    plus?: boolean;
}

const StatGauge = ({ stat, value, plus = false }: Params) => {
    return (
        <div className="gauge">
            <div className="w-8/10 flex flex-col items-center">
                <h2 className="flex items-center">
                    {value}
                    {plus && <FaPlus size={17} />}
                </h2>
                <p className="text-center text-wrap leading-6">{stat}</p>
            </div>
        </div>
    );
};

export default StatGauge;
