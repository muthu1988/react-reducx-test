import './App.css';
import Form from './Form';
import Table from './Table';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Test App</h2>
        <div className='App-header'>
          <Form />
          <Table />
        </div>
      </div>
    </Provider>
  );
}

export default App;
