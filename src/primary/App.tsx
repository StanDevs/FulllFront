import "./app.css";
import Header from "./components/Header/Header";
import DependencyProvider from "./context/DependencyProvider";
import EditProvider from "./context/EditProvider";
import Home from "./pages/home/Home";

function App() {
  return (
    <DependencyProvider>
      <EditProvider>
        <div className="app">
          <Header />
          <div className="app__page">
            <Home />
          </div>
        </div>
      </EditProvider>
    </DependencyProvider>
  );
}

export default App;
