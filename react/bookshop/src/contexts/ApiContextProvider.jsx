import { ApiContext } from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  const baseUrl = "https://www.dbooks.org/api";

  const value = {
    baseUrl,
    recentBooksUrl: `${baseUrl}/recent`,
    bookDetailsBaseUrl: `${baseUrl}/book`,
    searchBaseUrl: `${baseUrl}/search`,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
