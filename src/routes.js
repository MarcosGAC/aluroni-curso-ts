import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import Prato from "pages/Prato";
import Sobre from "pages/Sobre";
import Footer from "pages/components/Footer";
import Menu from "pages/components/Menu";
import PaginaPadrao from "pages/components/PaginaPadrao";
import NotFound from "pages/notFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="prato/:id" element={<Prato />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
