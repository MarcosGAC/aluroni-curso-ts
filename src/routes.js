import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import Sobre from "pages/Sobre";
import Menu from "pages/components/Menu";
import PaginaPadrao from "pages/components/PaginaPadrao";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} /> 
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}
