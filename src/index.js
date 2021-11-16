import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import raw from "./test.txt";

const processCSV = (str, delim=",") => {
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    return rows.map(row => {
        return row.split(delim);
    });
}

const csv_data = [];
fetch(raw)
    .then(blob => blob.text())
    .then(data => csv_data.push(...processCSV(data)));

ReactDOM.render(
  <React.StrictMode>
    <App ori={csv_data}/>
  </React.StrictMode>,
  document.getElementById('root')
);
