import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Toaster position="top-right" reverseOrder={false} />
    <App />
  </ThemeProvider>
);
