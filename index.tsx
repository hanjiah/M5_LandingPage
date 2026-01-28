
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("SparkDiscount: Initializing application...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("SparkDiscount: Root element not found.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("SparkDiscount: Render complete.");
  } catch (err) {
    console.error("SparkDiscount: Render failed", err);
    rootElement.innerHTML = `
      <div style="display:flex; justify-content:center; align-items:center; height:100vh; flex-direction:column; font-family:sans-serif;">
        <h1 style="color:#ef4444;">앱 실행 오류</h1>
        <p>새로고침을 시도해 주세요.</p>
        <code style="background:#f1f5f9; padding:10px; border-radius:8px; margin-top:20px;">${err}</code>
      </div>
    `;
  }
}
