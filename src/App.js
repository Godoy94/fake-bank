import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <Header />
        </div>

        <div className="content">
          <Menu />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
