
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we're finding the correct root element and rendering to it
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  document.body.innerHTML = "<div>Failed to load application: Root element not found</div>";
} else {
  createRoot(rootElement).render(<App />);
}
