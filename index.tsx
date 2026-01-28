
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("Initializing SparkDiscount Application...");

const renderApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error("Critical Error: Root element '#root' not found in DOM.");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log("Application successfully mounted.");
  } catch (error) {
    console.error("Failed to render the application:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; color: #ef4444;">
        <h2>애플리케이션 로드 오류</h2>
        <p>페이지를 새로고침 해주세요. 문제가 지속되면 관리자에게 문의 바랍니다.</p>
        <pre style="font-size: 12px; margin-top: 10px; opacity: 0.7;">${error instanceof Error ? error.message : 'Unknown error'}</pre>
      </div>
    `;
  }
};

// DOM이 완전히 준비된 후 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
