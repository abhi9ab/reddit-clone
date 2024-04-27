import { Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import {
	Channels,
	Posts,
	Hero,
	Create,
	Home
} from "./sections";


export default function App() {
	return (
		<main className="relative">
			<Nav />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='create' element={<Create />}/>
			</Routes>

		</main>
	)
}