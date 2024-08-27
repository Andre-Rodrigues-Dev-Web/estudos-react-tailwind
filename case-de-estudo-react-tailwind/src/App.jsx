import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./views/Home";
import Sobre from "./views/Sobre";
import Erro from "./views/Erro";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Erro />} />
      </Route>
    </Routes>
  );
};

export default App;
