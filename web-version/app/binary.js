let asciiObject;

async function fetchAsciiData() {
	await fetch('http://localhost:3000/ascii')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			asciiObject = data;
			// document.getElementById('ascii-data').textContent = JSON.stringify(data, null, 2);
		})
		.catch((error) => {
			console.error('Error fetching ASCII data:', error);
			document.getElementById('ascii-data').textContent = "Failed tp load ASCII data.";
		});
	return 0;
}

fetchAsciiData();

async function main() {
	// document.getElementById('ascii-data').textContent = JSON.stringify(asciiObject, null, 2);
	// document.getElementById('item-binary').textContent = asciiObject[0].binary;
	// document.getElementById('item-hex').textContent = asciiObject[0].hex;
	// document.getElementById('item-char').textContent = asciiObject[0].char;
	
	topDisplay();

	//
	document.getElementById('question-binary').textContent = asciiObject[68].binary;
	document.getElementById('question-char').textContent = asciiObject[68].char;

	while(findInput("input-char", "submit-char") != asciiObject[68].char) {
		await sleep(200);
		document.getElementById('correct').textContent = findInput("input-char", "submit-char");
	}
	document.getElementById('correct').textContent = "CORRECT YIPPEE";
}

setTimeout(main, 500);

async function topDisplay() {
	while (true) {
		for (let i = 0; i < asciiObject.length; i++) {
			document.getElementById('item-binary').textContent = asciiObject[i].binary;
			document.getElementById('item-hex').textContent = asciiObject[i].hex;
			document.getElementById('item-char').textContent = asciiObject[i].char;
			await sleep(500);
		}
	}
}

function findInput(inputID, submitID) {
	return document.getElementById('input-char').textContent;
	// return new Promise((resolve) => {
	// 	const inputField = document.getElementById(inputID);
	// 	const submitButton = document.getElementById(submitID);
	// 	
	// 	submitButton.addEventListener('click', () => {
	// 		if (inputField.value) {
	// 			resolve(inputField.value);
	// 		}
	// 	});
	// });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
