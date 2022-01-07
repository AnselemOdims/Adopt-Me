import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1></h1>
      <SearchParams />
    </div>
  )
}
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>
, document.getElementById("root"));
