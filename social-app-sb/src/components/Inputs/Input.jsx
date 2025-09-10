const Input = ({ placeholder, changeHandle, value }) => {
  return (
    <input
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        changeHandle(e.target.value);
      }}
    />
  );
};

export default Input;
