import { BrowserRouter } from "react-router-dom";
import AllComponents from "./components/AllComponents.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
      <div>test</div>
    </div>
  );
}

export default App;
