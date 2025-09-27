export type buttonSize = "small" | "medium" | "large";
export type buttonVariant = "solid" | "outline";
export type buttonColor = "blue" | "gray" | "white" | "black";

export interface ButtonProps {
  children: React.ReactNode;
  size?: buttonSize;
  variant?: buttonVariant;
  color?: buttonColor;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  size = "medium",
  variant = "solid",
  color = "blue",
  style = {},
}: ButtonProps) => {
  return (
    <button className={`btn ${size} ${variant} ${color}`} style={{ ...style }}>
      {children}
    </button>
  );
};

export default Button;
