import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface User {
  username: string;
  email: string;
  role: string;
  user_ID: string;
}

interface UserContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const VALID_CREDENTIALS = {
  username: "admin1",
  password: "P@ssword_000",
};

const MOCK_USER: User = {
  username: "admin1",
  email: "admin@prince.com",
  role: "Administrator",
  user_ID: "USR-001",
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      const mockToken = "static-jwt-token-prince-inventory";
      setUser(MOCK_USER);
      setToken(mockToken);
      localStorage.setItem("user", JSON.stringify(MOCK_USER));
      localStorage.setItem("token", mockToken);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    return user !== null;
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}
