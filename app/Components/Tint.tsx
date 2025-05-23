const Tint = ({
  className = "",
  alpha = 0.7,
  position = "absolute",
}: {
  className?: string;
  position?: string;
  alpha?: number;
}) => {
  const tintStyle: React.CSSProperties = {
    backgroundColor: `rgba(0, 0, 0, ${alpha})`,
    backdropFilter: "blur(0.01rem)",
    WebkitBackdropFilter: "blur(0.01rem)",
    width: "100%",
    height: "100%",
  };

  return <div style={tintStyle} className={`${position} ${className}`} />;
};

export default Tint;
