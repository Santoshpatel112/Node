import http from 'http';
import fs from 'fs';
const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');
const login = fs.readFileSync('./login.html');

const myserver = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/homepage' || req.url === '/home') {
        res.end(home);
    } else if (req.url === '/about') {
        res.end(about);
    } else if (req.url === '/login') {
        res.end(login);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

const PORT = 3000;
myserver.listen(PORT, () => {
    console.log("Server is Running on port " + PORT);
});