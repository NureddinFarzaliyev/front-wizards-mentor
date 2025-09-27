import ButtonBuilder from "./pages/ButtonBuilder";
import Buttons from "./pages/Buttons";

const App = () => {
  return (
    <div>
      <header>
        <h1>UI Library </h1>
      </header>
      <main>
        <Buttons />
        <ButtonBuilder />
      </main>
    </div>
  );
};

export default App;
