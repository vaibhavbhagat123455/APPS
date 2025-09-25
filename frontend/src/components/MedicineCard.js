// MedicineCard.js
import {
    Pill,
    Barcode,
    Calendar,
    IndianRupee,
    Factory,
    Shield,
    AlertTriangle,
    Store,
    Mail,
    ListChecks,
} from "lucide-react";

export default function MedicineCard({ medicine }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-5 mt-4 w-full max-w-md mx-auto border border-gray-100">
            <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <Pill className="w-6 h-6 text-blue-500" />
                {medicine.BrandName}
            </h2>

            <div className="mt-3 space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <strong>Composition:</strong> {medicine.Composition}
                </p>
                <p className="flex items-center gap-2">
                    <Barcode className="w-4 h-4 text-purple-600" />
                    <strong>Batch:</strong> {medicine.BatchNumber}
                </p>
                <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <strong>MFD:</strong>{" "}
                    {new Date(medicine.MDate).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <strong>EXP:</strong>{" "}
                    {new Date(medicine.EDate).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-emerald-600" />
                    <strong>MRP:</strong> ₹{medicine.MRP}
                </p>
                <p className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-indigo-600" />
                    <strong>Manufacturer:</strong> {medicine.Manufacturer}
                </p>
                <p className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-teal-600" />
                    <strong>Storage:</strong> {medicine.StorageInstructions}
                </p>
                <p className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <strong>Precautions:</strong> {medicine.Precautions}
                </p>
                <p className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-pink-600" />
                    <strong>Shop:</strong> {medicine.shopName}
                </p>
                <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <strong>Email:</strong> {medicine.email}
                </p>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-blue-500" />
                    SubCodes:
                </h3>
                <ul className="list-disc ml-6 text-sm text-gray-700">
                    {medicine.SubTextCode.map((sub, idx) => (
                        <li key={idx}>
                            <span className="font-medium">{sub.TextCode}</span> -{" "}
                            <span
                                className={`${sub.Status === "Active"
                                        ? "text-green-600 font-semibold"
                                        : "text-red-600 font-semibold"
                                    }`}
                            >
                                {sub.Status}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
