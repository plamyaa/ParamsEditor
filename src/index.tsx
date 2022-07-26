import React from 'react';
import ReactDOM from 'react-dom/client';
import ParamEditor from './paramEditor';
import { param, model } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ParamEditor 
      param={param}
      model={model}
    />
);

