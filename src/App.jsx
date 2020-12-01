import Axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Components/Movie";

function App() {
	const APIURL =
		"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
	const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		Axios.get(APIURL).then((res) => setMovies(res.data.results));
	}, []);

	const handleOnChenge = (e) => {
		setSearchTerm(e.target.value);
	};

	const handlesubmit = (e) => {
		e.preventDefault();

		if (!searchTerm) {
			Axios.get(APIURL).then((res) => setMovies(res.data.results));
			return;
		}

		Axios.get(SEARCHAPI + searchTerm).then((res) => setMovies(res.data.results));
	};

	return (
		<div>
			<header>
				<form id="form" onSubmit={handlesubmit}>
					<input
						type="text"
						id="search"
						className="search"
						placeholder="Search"
						value={searchTerm}
						onChange={handleOnChenge}
					/>
				</form>
			</header>
			<div className="App">{movies.length > 0 && movies.map((movie) => <Movie key={movie.id} data={movie} />)}</div>
		</div>
	);
}

export default App;
