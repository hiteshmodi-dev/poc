import logo from './logo.svg';
import './App.css';
import { LifeCycleFunction } from './components/LifeCycleFunction';
import { UseRefComponent } from './components/UseRefComponent';
import { ContextApiComponent } from './components/ContextApiComponent';
import UseReducer from './components/UseReducer';
import FetchDataComponent from './POC/DataComponent';

function App() {
  return (
    <FetchDataComponent />
    // <UseReducer />
    // <ContextApiComponent />
    // <UseRefComponent />
    // <LifeCycleFunction />
  );
}

export default App;
