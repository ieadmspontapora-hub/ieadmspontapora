import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { init } from '@emailjs/browser';
import "./globals.css";

// Inicializar EmailJS
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById("root")!).render(<App />);