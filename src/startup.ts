import * as dotenv from 'dotenv';

dotenv.config(); // Loads variables from '.env' file to process.env
import * as express from 'express';
const app = express();



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world\n');
});

app.listen(3000,
    () => console.log("server started at port :3000 ")
);