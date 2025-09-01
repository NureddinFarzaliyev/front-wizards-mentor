import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./contexts/ContextsProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./features/configureStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ContextsProvider>
    </BrowserRouter>
  </StrictMode>,
);
