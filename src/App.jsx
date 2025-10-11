import routes from './routing/routes';

import './scss/_main.scss';

const App = () => {
  return (
    <div className="main">
      {routes}
    </div>
  );
}

export default App;