import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cadastro } from "./pages/cadastro";
import { Apresentacao } from "./pages/apresentacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;