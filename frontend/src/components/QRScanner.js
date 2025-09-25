// QRScanner.js
import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Camera } from "lucide-react";

export default function QRScanner({ onScan }) {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: { width: 250, height: 250 },
        });

        scanner.render(
            (decodedText) => {
                onScan(decodedText);
                scanner.clear();
            },
            (errorMessage) => {
                console.warn(errorMessage);
            }
        );

        return () => {
            scanner.clear().catch(() => { });
        };
    }, [onScan]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
                <Camera className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Scan QR Code</span>
            </div>
            <div
                id="reader"
                className="w-72 h-72 rounded-xl border-2 border-dashed border-blue-400 shadow-md"
            />
        </div>
    );
}
