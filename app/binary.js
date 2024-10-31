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

function main() {
	// document.getElementById('ascii-data').textContent = JSON.stringify(asciiObject, null, 2);
	document.getElementById('item-binary').textContent = asciiObject[0].binary;
	document.getElementById('item-hex').textContent = asciiObject[0].hex;
	document.getElementById('item-char').textContent = asciiObject[0].char;
}

setTimeout(main, 50);
