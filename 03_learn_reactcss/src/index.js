import React from 'react';
import ReactDOM from 'react-dom/client';


// import App from './01_内联样式css/App.jsx';
// import App from './02_普通样式css/App.jsx';
// import App from './03_Modules样式css/App.jsx';
// import App from './04_react中配置less文件/App.jsx';
import App from "./05_Css_In_Js/App.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
