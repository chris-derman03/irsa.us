import { promises as fs } from "fs";
import AccidentTypesSection from "./AccidentTypesSection";

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
        <div className="flex flex-col gap-y-10">
            <AccidentTypesSection />
        </div>
    );
};

export default AccidentTypes;
