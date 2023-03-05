import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Header = () => {
	return (
		<div className="text-3xl border-b-2 p-3 flex justify-between items-center">
			<span>
				<span className="text-red-500">Filmy</span>
				<span className="text-white-900">Verse</span>
			</span>
			<h1 className="flex items-center text-xl cursor-pointer">
				<button>
					<AddIcon className="mr-1" /> Add New
				</button>
			</h1>
		</div>
	);
};

export default Header;
