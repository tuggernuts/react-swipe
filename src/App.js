
import './App.css';
import FileList from './FileList'
import { files as data } from './data';

function App() {
  return (
    <div className="App">
      <FileList files={data}/>
    </div>
  );
}

export default App;
