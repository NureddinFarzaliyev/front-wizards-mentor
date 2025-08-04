import TextInput from "./components/TextInput";

function App() {
  const [data, setData] = useState({
    ad: "",
    soyad: "",
  });

  return (
    <>
      <TextInput type="text" name="ad" required={true} />
      <TextInput type="text" name="soyad" required={true} />
    </>
  );
}

export default App;
