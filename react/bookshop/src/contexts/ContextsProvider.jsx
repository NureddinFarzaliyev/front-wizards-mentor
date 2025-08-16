import ApiContextProvider from "./ApiContextProvider";
import WishlistContextProvider from "./WishlistContextProvider";

const ContextsProvider = ({ children }) => {
  return (
    <ApiContextProvider>
      <WishlistContextProvider>{children}</WishlistContextProvider>
    </ApiContextProvider>
  );
};

export default ContextsProvider;
