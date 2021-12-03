import express from "express";
import API from "./routes/Api";

const app = express();
import App from "./providers/App";

App.loadServer();
