import classNames from "classnames";

const defaultStyles = classNames("w-full self-start -z-10 border-1");
const transitionStyles = classNames("transition-all duration-300 ease-in-out");

const AccidentTypesDropdown = ({
    expanded = false,
}: {
    expanded?: boolean;
}) => {
    return (
        <div
            className={classNames(defaultStyles, transitionStyles, {
                "opacity-0 pointer-events-none": !expanded,
                "translate-y-[69px] opacity-100 pointer-events-auto": expanded,
            })}
        >
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </div>
    );
};

export default AccidentTypesDropdown;
