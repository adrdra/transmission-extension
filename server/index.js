import bodyParser from "body-parser";
import express from 'express';
import routes from "./lib/routes";
import routesHelper from "./lib/helpers/routesHelper";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routesHelper.addRoutes(app, routes);
app.listen(3000)
