import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
	return (
		<main className="relative min-h-dvh w-screen overflow-x-hidden">
			<Hero />
			<About />
		</main>
	);
};

export default App;
