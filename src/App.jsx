import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
//import About from "./pages/About";
//import About from "./pages/
//import Contact from "./pages/Contact";

export default function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}
