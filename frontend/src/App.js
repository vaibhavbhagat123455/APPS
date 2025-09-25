import { useState } from "react";
import QRScanner from "./components/QRScanner";
import MedicineCard from "./components/MedicineCard";
import axios from "axios";

function App() {
  const [medicine, setMedicine] = useState(null);

  const handleScan = async (code) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/medicines/getByCode/${code}`);
      setMedicine(res.data);
    } catch (err) {
      alert("Medicine not found");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Medicine Scanner</h1>
      <QRScanner onScan={handleScan} />
      {medicine && <MedicineCard medicine={medicine} />}
    </div>
  );
}

export default App;
