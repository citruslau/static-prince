import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/use-auth";
import { toast } from "sonner";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      toast.success("Login successful");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-custom-bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center gap-4 mb-8">
          <img src="/Company_Logo.svg" alt="Prince" className="w-16 h-16" />
          <h2 className="text-2xl font-bold text-custom-black">Prince Inventory</h2>
          <p className="text-sm text-vesper-gray">Educational Supply Inventory System</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-custom-black">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-lg border border-bellflower-gray bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-river-green"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-custom-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-bellflower-gray bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-river-green"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-river-green hover:brightness-105 text-white font-semibold py-3 rounded-lg transition-all duration-200 mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
