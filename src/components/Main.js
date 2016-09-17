require('normalize.css');
require('styles/App.styl'); 
import React from 'react';
import config from 'config';

const devtools = (() => {
  if (config.appEnv === 'dev') {
    const DevTools = require('components/DevTools').default;
    //console.log(DevTools);
    return <DevTools />;
  } else {
    return null;
  }
})();

const Main = (props) => (
  <div>
    {devtools}
    {props.children}
  </div>
);

export default Main;
