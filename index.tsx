
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("SparkDiscount: Starting application boot sequence...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("SparkDiscount: Critical error - Root element (#root) not found in DOM.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("SparkDiscount: React tree mounted successfully.");
  } catch (err) {
    console.error("SparkDiscount: Application failed to render", err);
    rootElement.innerHTML = `
      <div style="display:flex; justify-content:center; align-items:center; height:100vh; flex-direction:column; font-family:sans-serif; text-align:center; padding:20px;">
        <h1 style="color:#ef4444; margin-bottom:10px;">앱 실행 오류</h1>
        <p style="color:#64748b; margin-bottom:20px;">시스템 구성 중 문제가 발생했습니다. 브라우저 캐시를 비우거나 잠시 후 다시 시도해 주세요.</p>
        <div style="background:#f1f5f9; padding:15px; border-radius:12px; font-size:12px; text-align:left; max-width:100%; overflow:auto;">
          <code style="color:#e11d48;">${String(err)}</code>
        </div>
        <button onclick="window.location.reload()" style="margin-top:20px; padding:10px 20px; background:#4f46e5; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">새로고침</button>
      </div>
    `;
  }
}
