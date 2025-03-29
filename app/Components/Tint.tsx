const Tint = ({ className = "" }: { className?: string }) => {
    const tintStyle: React.CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(0.01rem)",
        WebkitBackdropFilter: "blur(0.01rem)",
        position: "absolute",
        width: "100%",
        height: "100%",
    };

    return <div style={tintStyle} className={className} />;
};

export default Tint;
