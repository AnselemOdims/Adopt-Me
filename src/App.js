import ReactDOM from 'react-dom';
import Pet from './Pet.js';

const App = () => {
  return (
    <div>
      <h1></h1>
      <Pet name='Hector' animal='Dog' breed='Dobberman' />
      <Pet name='Hercules' animal='Dog' breed='German Shepherd' />
      <Pet name='Fluffy' animal='Cat' breed='Egyptian Cat' />
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));
