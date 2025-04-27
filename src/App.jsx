import './scss/_main.scss';
import routes from './routing/routes';

const App = () => {
  return (
    <div className="main">
      {routes}
    </div>
  );
}

export default App;