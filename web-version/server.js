const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS) from the 'app' directory
app.use(express.static('app'));

app.use(cors());

// Endpoint to serve JSON data
app.get('/ascii', (req, res) => {
	fs.readFile(path.join(__dirname, 'dictionary.json'), 'utf8', (err, data) => {
		if (err) {
			return res.status(500).send('Error reading JSON file');
		}
		res.json(JSON.parse(data));
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
