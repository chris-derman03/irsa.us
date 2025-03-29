import classNames from "classnames";

const AccidentTypesDropdown = ({ hidden = true }: { hidden?: boolean }) => {
    return (
        <div
            className={classNames(
                "h-[100px] border-1 " +
                    {
                        hidden: hidden,
                    }
            )}
        >
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </div>
    );
};

export default AccidentTypesDropdown;
