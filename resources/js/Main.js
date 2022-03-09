import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

const Main = () => {
  return (
    // <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </React.StrictMode>            
  );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
