import "./index.css";
import { Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";
import Landing from "./pages/Landing";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="todos" element={<Todos />} />
      </Route>
    </Routes>
  );
}

export default App;
