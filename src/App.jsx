import "./styles.css"
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Event1Page from "./pages/Event1Page";
import Event2page from "./pages/Event2page";
import Event3page from "./pages/Event3page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/6c5a341d524b531603deb7819a3ba5c5" element={<Event1Page/>} />
        <Route path="/768dd8954723bf17f49a42481b5c50c7" element={<Event2page/>} />
        <Route path="/6958799a4a9145b3a627ceab4291baa3" element={<Event3page/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
