import "./app.css"
import DependencyProvider from "./context/DependencyProvider";
import Home from "./pages/home/Home";

function App() {
  return (
    <DependencyProvider>
    <div data-testid="app" className="App">
      <Home />
    </div>
    </DependencyProvider>
  );
}

export default App;
