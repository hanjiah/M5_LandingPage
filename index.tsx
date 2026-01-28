
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("SparkDiscount App is initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("SparkDiscount App rendered successfully.");
}
