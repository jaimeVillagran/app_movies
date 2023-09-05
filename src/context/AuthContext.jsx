import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// llamar API para chequear si hay un usuario logueado
		// y setearlo en state
	}, []);

	const login = (userCreds) => {
		// llamar API login y setear user
	};

	const logout = () => {
		// llamar API logout y setear user a null
	};

	const value = {
		user,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
