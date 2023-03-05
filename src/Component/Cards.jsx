import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
	const [data, setData] = useState([]);

	return (
		<div className="flex flex-wrap justify-between px-3 mt-2">
			{data.map((e, i) => {
				return (
					<div
						key={i}
						className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
					>
						<img className="h-60 md:h-72" src={e.image} alt="" />
						<h1>{e.title}</h1>
						<h1 className="flex items-center">
							<span className="text-gray-500 mr-1">Rating:</span>
							<ReactStars
								size={20}
								half={true}
								value={e.rating / e.rated}
								edit={false}
							/>
						</h1>
						<h1>
							<span className="text-gray-500">Year:</span> {e.year}
						</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
