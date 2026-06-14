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
    <section className="min-h-screen flex items-center justify-center">
      <div className="container max-w-md mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between w-full gap-5">
          <img src="/Company_Logo.svg" alt="Company Logo" />
          <h1>Prince Educational Supply</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <input
              placeholder="Username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-full max-w-full">
              login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
