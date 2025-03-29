import classNames from "classnames";

interface Params {
    width?: number;
    mobile?: boolean;
}

const PanelDivider = ({ width = 1, mobile = false }: Params) => {
    return (
        <div
            className={classNames({
                "w-full divider": true,
                "md:hidden": mobile,
            })}
            style={{ height: `${width}px` }}
        />
    );
};

export default PanelDivider;
