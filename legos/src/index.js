import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './theme/theme';
import Fonts from './theme/base/Fonts';
import { ChakraProvider } from '@chakra-ui/react';
import Compiler from './pages/compiler';
import Info from './pages/info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Fonts></Fonts>
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/compiler">
            <Compiler />
          </Route>
          <Route path="/contact">
            <Info />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
