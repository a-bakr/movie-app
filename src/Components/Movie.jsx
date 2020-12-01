import React from "react";

function Movie(props) {
	const IMGPATH = "https://image.tmdb.org/t/p/w1280";

	const vote = props.data.vote_average;

	const ratingColor = (vote) => {
		return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
	};

	return (
		<div className="card">
			<img src={IMGPATH + props.data.poster_path} alt="" />
			<div className="contant">
				<h2>{props.data.title}</h2>
				<span className={`vote ${ratingColor(vote)}`}>{vote}</span>
			</div>

			<div className="overview ">
				<h3>Overview: </h3>
				{props.data.overview}
			</div>
		</div>
	);
}

export default Movie;
