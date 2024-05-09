function validateInput(inputField) {
	const inputValue = inputField.value;
	if (!/^-?\d+(\.\d+)?$/.test(inputValue)) {
		alert("Invalid input. Please enter a valid number.");
		inputField.focus();
		return false;
	}
	return true;
}

function generateTable() {
	const functionSelect = document.getElementById("function");
	const startAngleInput = document.getElementById("start-angle");
	const endAngleInput = document.getElementById("end-angle");
	const stepInput = document.getElementById("step");

	if (!validateInput(startAngleInput) ||!validateInput(endAngleInput) ||!validateInput(stepInput)) {
		return;
	}

	const functionName = functionSelect.value;
	const startAngle = parseFloat(startAngleInput.value);
	const endAngle = parseFloat(endAngleInput.value);
	const step = parseFloat(stepInput.value);

	const tableContainer = document.getElementById("table-container");
	tableContainer.innerHTML = "";

	const table = document.createElement("table");
	table.id = "trig-table";
	tableContainer.appendChild(table);

	const tableHead = document.createElement("thead");
	table.appendChild(tableHead);

	const tableHeadRow = document.createElement("tr");
	tableHead.appendChild(tableHeadRow);

	const tableHeadCells = ["Angle (degrees)", "Angle (radians)", functionName];
	for (let i = 0; i < tableHeadCells.length; i++) {
		const tableHeadCell = document.createElement("th");
		tableHeadCell.textContent = tableHeadCells[i];
		tableHeadRow.appendChild(tableHeadCell);
	}

	const tableBody = document.createElement("tbody");
	table.appendChild(tableBody);

	for (let angle = startAngle; angle <= endAngle; angle += step) {
		const tableRow = document.createElement("tr");
		tableBody.appendChild(tableRow);

		const angleDegreesCell = document.createElement("td");
		angleDegreesCell.textContent = angle.toFixed(2);
		tableRow.appendChild(angleDegreesCell);

		const angleRadiansCell = document.createElement("td");
		angleRadiansCell.textContent = (angle * Math.PI / 180).toFixed(4);
		tableRow.appendChild(angleRadiansCell);

		const functionValueCell = document.createElement("td");
		let functionValue;
		switch (functionName) {
			case "sin":
				functionValue = Math.sin(angle * Math.PI / 180).toFixed(4);
				break;
			case "cos":
				functionValue = Math.cos(angle * Math.PI /180).toFixed(4);
				break;
			case "tg":
				functionValue = Math.tan(angle * Math.PI / 180).toFixed(4);
				break;
		}
		functionValueCell.textContent = functionValue;
		tableRow.appendChild(functionValueCell);
	}
}