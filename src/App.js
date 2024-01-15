import { BrowserRouter } from "react-router-dom";
import AllComponents from "./components/AllComponents.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
      <h1></h1>
    </div>
  );
}

export default App;
