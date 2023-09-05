import { apiClient } from "./apiClient";

export function login(credentials) {
	return apiClient.post("/auth/login", credentials);
}

export function register(userData) {
	return apiClient.post("/auth/register", userData);
}

export function logout() {
	return apiClient.post("/auth/logout");
}
