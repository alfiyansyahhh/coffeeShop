import { BrowserRouter} from 'react-router-dom'
import './App.css';
import Router from './router/Router'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

