const TextInput = ({ onChange, name, isError, type, errorMessage, value }) => {
  return (
    <label>
      {name}
      <input
        type={type || "text"}
        name={name}
        onChange={onChange}
        className={`text-input ${isError ? "is-invalid" : ""}`}
        required
        value={value || ""}
      />
      {isError && errorMessage && (
        <span className="error-message">{errorMessage}</span>
      )}
    </label>
  );
};

export default TextInput;
