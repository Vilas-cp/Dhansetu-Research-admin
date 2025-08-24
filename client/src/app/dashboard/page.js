"use client";
import { useState } from "react";
import { apiPost } from "@/lib/api";
import { useVerifySession } from "@/hooks/userVerifySession";

export default function Dashboard() {
  const [data, setData] = useState([]);
  useVerifySession();

  async function handleLogout() {
    await apiPost("admin/v1/logout");
    window.location.href = "/login";
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
     <img src="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"
     alt="My Image" width="500" height="400"/>


      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
