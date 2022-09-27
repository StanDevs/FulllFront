import "./app.css";
import DependencyProvider from "./context/DependencyProvider";
import EditProvider from "./context/EditProvider";
import Home from "./pages/home/Home";

function App() {
  return (
    <DependencyProvider>
      <EditProvider>
        <div data-testid="app" className="app">
          <Home />
        </div>
      </EditProvider>
    </DependencyProvider>
  );
}

export default App;
