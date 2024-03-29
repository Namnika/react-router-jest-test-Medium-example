import NoMatch from "./page/NoMatch";
import Main from "./page/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
