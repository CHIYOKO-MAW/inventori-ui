import { barangDummy } from "../data/barangDummy";
import Table from "../components/Table";

export default function Barang() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Data Barang</h1>

      <div className="bg-white p-4 rounded shadow">
        <Table headers={["Kode", "Nama", "Kategori", "Satuan", "Stok", "Harga"]}>
          {barangDummy.map(b => (
            <tr key={b.kode}>
              <td className="border p-2">{b.kode}</td>
              <td className="border p-2">{b.nama}</td>
              <td className="border p-2">{b.kategori}</td>
              <td className="border p-2">{b.satuan}</td>
              <td className="border p-2">{b.stok}</td>
              <td className="border p-2">Rp {b.harga}</td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}
