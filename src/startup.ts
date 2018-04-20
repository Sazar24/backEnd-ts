import * as dotenv from 'dotenv';

dotenv.config(); // Loads variables from '.env' file to process.env
import * as express from 'express';
const app = express();
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';

app.use(bodyParser.json());
// const jsonParser = bodyParser.json();



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world\n');
    console.log("/ hit");
});

app.post('/api/users',  (req: express.Request, res) => {
    console.log("=================");
    console.log("req.body", req.body);
    console.log("-----------------");
    console.log("req.headers", req.headers);

    console.log("req.headers.dupa",req.headers["dupa"]);
    res.send("this is response from /api/users")

});


app.listen(3000,
    () => console.log("server started at port :3000 ")
);