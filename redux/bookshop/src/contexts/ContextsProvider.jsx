import ApiContextProvider from "./ApiContextProvider";

const ContextsProvider = ({ children }) => {
  return <ApiContextProvider>{children}</ApiContextProvider>;
};

export default ContextsProvider;
