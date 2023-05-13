import { renderRoutes } from "react-router-config";
import routes from "./routes";
import './App.css';

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
