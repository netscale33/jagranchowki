import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Dynamically handle basename so it works on GitHub Pages subfolder AND custom main domain hosting with 0 errors
const getBasename = () => {
  if (window.location.hostname.includes('github.io')) {
    return '/jagranchowki';
  }
  return '/';
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
