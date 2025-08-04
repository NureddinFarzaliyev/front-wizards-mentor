const TextInput = ({ type, name, required }) => {
  return (
    <label>
      {name} {required && <span>*</span>}:
      <input type={type} name={name} required={required} />
    </label>
  );
};

export default TextInput;
