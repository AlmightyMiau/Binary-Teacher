document.body.style.background = 'purple';

async function fetchAsciiData() {
	fetch('http://localhost:3000/ascii')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			document.getElementById('ascii-data').textContent = JSON.stringify(data, null, 2);
		})
		.catch((error) => {
			console.error('Error fetching ASCII data:', error);
			document.getElementById('ascii-data').textContent = "Failed tp load ASCII data.";
		});
}

fetchAsciiData();
