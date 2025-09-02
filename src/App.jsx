import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import {
  IoHome,
  IoApps,
  IoCalendarOutline,
  IoTimeOutline,
} from "react-icons/io5";
import profilePic from "./assets/profilepic.jpg";

export default function App() {
  const [qrValue, setQrValue] = useState(Date.now().toString());
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setQrValue(Date.now().toString());
      setCountdown(30); // Reset countdown when QR refreshes
    }, 30000); // refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 30));
    }, 1000); // Update countdown every second
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-white min-h-screen relative">
      {/* Header */}
      <div className="w-full pt-12 pb-5 px-12 bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-lg font-bold">Access Gate</h1>
      </div>

      {/* Profile */}
      <img
        src={profilePic}
        alt="Profile Picture"
        className="w-25 h-25 rounded-full mt-4 object-cover"
      />

      <h2 className="text-lg font-bold mt-2">محمد شريف حسن السيد فرج</h2>
      <p className="text-xs text-black text-center mt-1 font-bold">
        Unit Number: [15 (المنطقة الرابعة) قصر الشوق ع 18]
      </p>
      <p className="text-xs text-red-500 mb-4 mt-2 font-bold">SubOwner</p>

      {/* Instruction */}
      <p className="text-base font-bold mb-0 pb-0">Show this to the gate</p>
      <p className="text-base font-bold mb-0 pb-0">scanner</p>

      {/* QR Code */}
      <div className="p-2 border-2 border-black my-4">
        <div className="bg-white p-1">
          <QRCode
            value={qrValue}
            size={180}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </div>
      </div>

      {/* Refresh Text */}
      <p className="text-xs text-black text-center mt-0 w-48">
        Refreshes Automatically after {countdown} Sec
      </p>

      {/* Divider */}
      <div className="w-11/12 h-px bg-gray-300 mt-16 mb-5"></div>

      {/* Buttons */}
      <div className="flex justify-between w-full mt-2 px-2 mb-20">
        <button className="flex-1 bg-blue-600 mx-2 py-3 rounded-2xl">
          <span className="text-white text-sm font-bold">Invite a Guest</span>
        </button>
        <button className="flex-1 bg-blue-600 mx-2 py-3 rounded-2xl">
          <span className="text-white text-sm font-bold">Invite to Beach</span>
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <div className="flex justify-around border-t border-gray-300 py-3 w-full fixed bottom-0 bg-white">
        <div className="flex flex-col items-center">
          <IoHome size={22} className="text-blue-600" />
          <span className="text-xs text-blue-600 mt-1">Access Gate</span>
        </div>
        <div className="flex flex-col items-center">
          <IoApps size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Explore</span>
        </div>
        <div className="flex flex-col items-center">
          <IoCalendarOutline size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Visits</span>
        </div>
        <div className="flex flex-col items-center">
          <IoTimeOutline size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">More</span>
        </div>
      </div>
    </div>
  );
}
