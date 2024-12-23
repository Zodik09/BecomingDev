//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// Started...
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser'; // Visit to line no. 17.

const app = express();
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url));

let authenticated = false;

// app.use(express.urlencoded({ extended: true }));  // Commented out as bodyParser.urlencoded performs the same functionality you can use either of one.
app.use(bodyParser.urlencoded({ extended: true }));

function authenticate(req, res, next) {
    const password = req.body.password;
    password === "ILoveProgramming" ? authenticated = true : authenticated = false;
    next();
}

app.use(authenticate);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    authenticated ? res.sendFile(__dirname + "/public/secret.html") : res.redirect("/");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log("Running...");
})