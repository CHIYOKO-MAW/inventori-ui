import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import TransaksiMasuk from "./pages/TransaksiMasuk";
import TransaksiKeluar from "./pages/TransaksiKeluar";
import Suppliers from "./pages/Suppliers";
import Laporan from "./pages/Laporan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/barang" element={<Products />} />
          <Route path="/barang-masuk" element={<TransaksiMasuk />} />
          <Route path="/barang-keluar" element={<TransaksiKeluar />} />
          <Route path="/supplier" element={<Suppliers />} />
          <Route path="/laporan" element={<Laporan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
