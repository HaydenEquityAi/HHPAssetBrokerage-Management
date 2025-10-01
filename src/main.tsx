import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeErrorHandling } from "./utils/debug";

// Initialize error handling and debugging
initializeErrorHandling();

createRoot(document.getElementById("root")!).render(<App />);
