import { useState } from "react";
import type {
  buttonColor,
  ButtonProps,
  buttonSize,
  buttonVariant,
} from "../components/Button";
import Button from "../components/Button";
import Flex from "../components/Flex";

const ButtonBuilder = () => {
  const initialButton: ButtonProps = {
    children: "Button",
    size: "medium",
    variant: "solid",
    color: "blue",
    style: {},
  };

  const [buttonStyle, setButtonStyle] = useState<ButtonProps>(initialButton);

  const buttonSizes: buttonSize[] = ["small", "medium", "large"];
  const buttonVariants: buttonVariant[] = ["solid", "outline"];
  const buttonColors: buttonColor[] = ["blue", "gray", "white", "black"];

  return (
    <div>
      <h2 className="page-header">
        Button Builder
        <Flex
          direction="column"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <label>
            Text:
            <input
              type="text"
              value={buttonStyle.children as string}
              onChange={(e) =>
                setButtonStyle({ ...buttonStyle, children: e.target.value })
              }
            />
          </label>
          <label>
            Size:
            <select
              value={buttonStyle.size}
              onChange={(e) =>
                setButtonStyle({
                  ...buttonStyle,
                  size: e.target.value as ButtonProps["size"],
                })
              }
            >
              {buttonSizes.map((size) => (
                <option key={size} value={size}>
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </option>
              ))}
            </select>
          </label>
          <label>
            Variant:
            <select
              value={buttonStyle.variant}
              onChange={(e) =>
                setButtonStyle({
                  ...buttonStyle,
                  variant: e.target.value as ButtonProps["variant"],
                })
              }
            >
              {buttonVariants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </option>
              ))}
            </select>
          </label>
          <label>
            Color:
            <select
              value={buttonStyle.color}
              onChange={(e) =>
                setButtonStyle({
                  ...buttonStyle,
                  color: e.target.value as ButtonProps["color"],
                })
              }
            >
              {buttonColors.map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </Flex>
        <div>
          <Button {...buttonStyle} />
        </div>
        <div>
          <pre
            style={{
              background: "#202020",
              padding: "20px",
              color: "#fff",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            {`<Button 
  size="${buttonStyle.size}"
  variant="${buttonStyle.variant}"
  color="${buttonStyle.color}"
  style={${JSON.stringify(buttonStyle.style)}}
>
    ${buttonStyle.children}
</Button>`}
          </pre>
        </div>
      </h2>
    </div>
  );
};

export default ButtonBuilder;
