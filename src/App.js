import './App.css';
import Pie from './componentes/pie/Pie';
import Content from './componentes/content/Content';
import AppRouter from './AppRouter/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter/>
      </header>
        <Content/>
      <Pie/>
    </div>
  );
}

export default App;
