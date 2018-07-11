import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';


import axios from 'axios';
import config from './config';

const serverRender = () => {
  axios.get(`${config.serverURL}/api/contests`)
  .then(res => {
    return (ReactDOMServer.renderToString(<App initialContests={res.data.contests} />));
  })
  .catch(console.error);
};

export default serverRender;

