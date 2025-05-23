const StyledList = ({
  items,
  style = "text-secondary",
  separator = ", ",
  conjunction = " and ",
  inverted = false,
}: {
  items: string[];
  style?: string;
  separator?: string;
  conjunction?: string;
  inverted?: boolean;
}) => {
  const n = items.length;
  const itemStyle = inverted ? "" : style;
  const commaStyle = inverted ? style : "";

  if (n === 0) return null;
  if (n === 1) return <span className={itemStyle}>{items[0]}</span>;
  if (n === 2)
    return (
      <>
        <span className={itemStyle}>{items[0]}</span>
        <span className={commaStyle}>{`${conjunction}`}</span>
        <span className={itemStyle}>{items[1]}</span>
      </>
    );

  return (
    <>
      {items.map((item, i) => (
        <span key={`styledListItem_${item}`}>
          <span className={itemStyle}> {item}</span>
          {i < n - 2 ? (
            <span className={commaStyle}>{`${separator} `}</span>
          ) : i === n - 2 ? (
            <span className={commaStyle}>{`${separator}${conjunction} `}</span>
          ) : (
            ""
          )}
        </span>
      ))}
    </>
  );
};

export default StyledList;
