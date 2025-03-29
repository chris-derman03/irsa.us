import { promises as fs } from "fs";
import PanelDivider from "../PanelDivider";

interface Accident {
    type: string;
    examples: string[];
}

const AccidentTypes = async () => {
    const file = await fs.readFile(
        process.cwd() + "/app/data/accident_types.json",
        "utf-8"
    );
    const accidents: Accident[] = JSON.parse(file).accidents;

    return (
        <div className="flex flex-wrap gap-y-10">
            {accidents.map((accident) => (
                <div
                    className="w-1/2 flex flex-col justify-start"
                    key={accident.type}
                >
                    <h2 className="text-xl text-center">{accident.type}</h2>
                    <PanelDivider />
                    <ul className="self-center">
                        {accident.examples.map((example) => (
                            <li key={accident.type + "_" + example}>
                                {example}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AccidentTypes;
