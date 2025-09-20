import { useState } from "react";

const App = () => {
  const initialIndex: number = 0;

  const strings: string[] = [
    "Hello, World!",
    "Hello, React!",
    "Hello, Sass!",
    "Hello, TypeScript!",
  ];

  const [textIndex, setTextIndex] = useState<number>(initialIndex);

  type handleClickType = () => void;

  const handleClick: handleClickType = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % strings.length);
  };

  return (
    <div className="card">
      <h2 className="card-title">{strings[textIndex]}</h2>
      <p className="card-content">This is a simple card styled with Sass.</p>
      <div className="btns">
        <button className="btn-primary" onClick={handleClick}>
          Click Me
        </button>
        <button className="btn-cancel">Don't Click Me</button>
      </div>
    </div>
  );
};

export default App;
