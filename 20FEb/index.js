import http from 'http';
import fs from 'fs';
const home = fs.readFileSync('./index.html');

const myserver = http.createServer((req, res) => {
    res.end(home);
});

myserver.listen(8000, () => {
    console.log("Server is Running on port 8000");
});