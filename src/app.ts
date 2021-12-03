import express from "express";
import API from "./routes/Api";

const app = express();
const port = 3000;

API.mountRoutes(app);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
