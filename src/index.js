import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import data from './testData';
console.log(data);

ReactDom.render(
    <App initialContests={[]} className="App" />,
    document.getElementById('root')
);