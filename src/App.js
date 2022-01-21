
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'


function App() {
  return (
    <div className="App">
      
      {/*sidebar*/}
      <Sidebar/>
      {/*Feed*/}
      <Feed/>
      {/*Widget*/}
      <Widgets/>
    </div>
  );
}

export default App;
