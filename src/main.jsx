import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
