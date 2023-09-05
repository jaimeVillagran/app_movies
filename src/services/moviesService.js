import { apiClient } from "./apiClient";

export function getMovies() {
	return apiClient.get("/movies");
}

export function getMovies(id) {
	return apiClient.get(`/movies/${id}`);
}

export function createMovies(movieData) {
	return apiClient.post("/movies", movieData);
}

export function updateMovies(id, movieData) {
	return apiClient.put(`/movies/${id}`, movieData);
}

export function deleteMovies(id) {
	return apiClient.delete(`/movies/${id}`);
}
