import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("");
	return (
		<div className="bigDiv">
			<div className="stem"></div>
			<div className="lightHousing">
				<div
					onClick={() => {
						setColor("red");
					}}
					className="red-light"
					style={{
						backgroundColor: color === "red" ? "purple" : "red",
					}}></div>

				<div
					onClick={() => {
						setColor("yellow");
					}}
					className="yellow-light"
					style={{
						backgroundColor:
							color === "yellow" ? "purple" : "yellow",
					}}></div>

				<div
					onClick={() => {
						setColor("green");
					}}
					className="green-light"
					style={{
						backgroundColor: color === "green" ? "purple" : "green",
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
