const defaultStyles =
  "w-95/100 self-start -z-1 tintedPanel rounded-t-none! rounded-b-[4px]!";
const transitionStyles = "transition-all duration-300 ease-in-out";

interface Params {
  expanded?: boolean;
  examples: string[];
  fontSize: number;
  paddingY: number;
}

const AccidentTypesDropdown = ({
  expanded = false,
  examples,
  fontSize,
  paddingY,
}: Params) => {
  console.log(fontSize);
  return (
    <div
      className={`${defaultStyles} ${transitionStyles} ${
        expanded
          ? "translate-y-[69px] lg:translate-y-[99px] opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ul
        className="text-center pl-5"
        style={{
          paddingTop: `${paddingY / 2}px`,
          paddingBottom: `${paddingY / 2}px`,
        }}
      >
        {examples.map((example) => (
          <li key={example} style={{ height: `${fontSize}px` }}>
            <p style={{ fontSize: `${fontSize - 8}px` }}>{example}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccidentTypesDropdown;
