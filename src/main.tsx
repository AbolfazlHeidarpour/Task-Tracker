import React from 'react'
import ReactDOM from 'react-dom/client'
import {TaskTrackerApp} from "./components/TaskTrackerApp";
import './css/index.css';

const div = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(div);

root.render(
  <React.StrictMode>
    <TaskTrackerApp />
  </React.StrictMode>,
);
