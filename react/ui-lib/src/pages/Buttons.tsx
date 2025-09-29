import type { ButtonProps } from "../components/Button";
import Button from "../components/Button";
import Flex from "../components/Flex";

const Buttons = () => {
  const buttons: ButtonProps[] = [
    {
      size: "small",
      variant: "solid",
      color: "blue",
      children: "Small Solid blue",
    },
    {
      size: "medium",
      variant: "solid",
      color: "gray",
      children: "Medium Solid gray",
    },
    {
      size: "large",
      variant: "solid",
      color: "white",
      children: "Large Solid white",
    },
    {
      size: "small",
      variant: "outline",
      color: "blue",
      children: "Small Outlined blue",
    },
    {
      size: "medium",
      variant: "outline",
      color: "gray",
      children: "Medium Outlined gray",
    },
    {
      size: "large",
      variant: "outline",
      color: "white",
      children: "Large Outlined white",
    },
  ];
  return (
    <div>
      <h2 className="page-header">Buttons</h2>
      <Flex direction="column" style={{ width: "fit-content" }}>
        {buttons.map((btn, index) => (
          <Button
            key={index}
            size={btn.size}
            variant={btn.variant}
            color={btn.color}
            style={{ marginBottom: "10px" }}
          >
            {btn.children}
          </Button>
        ))}
      </Flex>
      <hr />

      <Button size="large" color="gray" variant="outline">
        click me
      </Button>
    </div>
  );
};

export default Buttons;
