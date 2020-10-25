import Navbar from './components/Navbar/Navbar';
import TableComponent from './components/table/Table';

function App() {
  return (
    <div>
    <Navbar />
    <div className="container">
      <h2>Main content goes here.</h2>
      <TableComponent />
    </div>

    </div>
  );
}

export default App;
