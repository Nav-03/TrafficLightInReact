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
						backgroundColor: color === "red" ? "blue" : "red",
					}}></div>

				<div
					onClick={() => {
						setColor("yellow");
					}}
					className="yellow-light"
					style={{
						backgroundColor: color === "yellow" ? "blue" : "yellow",
					}}></div>

				<div
					onClick={() => {
						setColor("green");
					}}
					className="green-light"
					style={{
						backgroundColor: color === "green" ? "blue" : "green",
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
