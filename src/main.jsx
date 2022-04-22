import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './styles/globals.module.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App styles={styles} />
  </React.StrictMode>
);


