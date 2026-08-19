import { createContext, useEffect, useRef, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const local = localStorage.getItem("CareerUser");
    return local ? JSON.parse(local) : null;
  });

  const logoutTimer = useRef(null);

  const logout = () => {
    localStorage.removeItem("CareerUser");
    localStorage.removeItem("logoutTime");

    setUser(null);

    if (logoutTimer.current) {
      clearTimeout(logoutTimer.current);
      logoutTimer.current = null;
    }
  };

  const login = (data) => {
    const logoutTime = Date.now() + 3 * 60 * 60 * 1000;

    localStorage.setItem("CareerUser", JSON.stringify(data));
    localStorage.setItem("logoutTime", logoutTime);

    setUser(data);

    logoutTimer.current = setTimeout(() => {
      logout();
      alert("⏰ Session expired. Please log in again.");
    }, 3 * 60 * 60 * 1000);
  };

  useEffect(() => {
  const logoutTime = localStorage.getItem("logoutTime");

  if (!logoutTime) return;

  const remaining = Number(logoutTime) - Date.now();

  if (remaining <= 0) {
    localStorage.removeItem("CareerUser");
    localStorage.removeItem("logoutTime");
    return;
  }

  logoutTimer.current = setTimeout(() => {
    logout();
    alert("⏰ Session expired. Please log in again.");
  }, remaining);

  return () => {
    if (logoutTimer.current) {
      clearTimeout(logoutTimer.current);
    }
  };
}, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


