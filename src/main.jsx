import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MovieProvider } from "./context/MovieProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { BookmarkProvider } from "./context/BookmarkProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <AuthProvider>
          <BookmarkProvider>
            <ScrollToTop />
            <App />
          </BookmarkProvider>
        </AuthProvider>
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>,
);
