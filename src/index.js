import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppHook from './AppHook';
import Timer from './components/Timer';

ReactDOM.render(
  <React.StrictMode>
    <Timer time={5} autostart={false} step={1000} timerKey={1} onTimeEnd={() => "Час вийшов!"} />
    <Timer time={123} autostart={true} step={2000} timerKey={2} onTimeEnd={() => "Час вийшов!"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
