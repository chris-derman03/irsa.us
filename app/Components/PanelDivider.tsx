interface Props {
  height?: number;
  mobile?: boolean;
  className?: string;
}

const PanelDivider = ({
  height = 1,
  mobile = false,
  className = "",
}: Props) => {
  return (
    <div
      className={`
        w-full divider bg-[var(--primary)] opacity-70
        ${className}
        ${mobile ? "md:hidden" : ""}
      `}
      style={{ height: `${height}px` }}
    />
  );
};

export default PanelDivider;
