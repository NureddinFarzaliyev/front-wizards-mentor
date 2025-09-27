interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  alignment?: "center" | "start";
  wrap?: boolean;
  gap?: "small" | "medium" | "large";
  style?: React.CSSProperties;
}

const Flex = ({
  children,
  direction = "row",
  alignment = "start",
  wrap = false,
  gap = "medium",
  style = {},
}: FlexProps) => {
  return (
    <div
      className={`flex ${direction} ${alignment} ${wrap} ${gap}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export default Flex;
