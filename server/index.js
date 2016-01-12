import Transmission from 'transmission';
import bodyParser from "body-parser";
import express from 'express';
import config from "./config";
import routes from "./lib/routes";
import routesHelper from "./lib/helpers/routesHelper";

const app = express();
const transmission = new Transmission(config);

// const addUrl = (torrent) => {
//   return new Promise((resolve, reject) => {
//     transmission.addUrl(torrent, (err, res) => {
//       if (err) return reject(err);
//       return resolve(res);
//     });
//   });
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routesHelper.addRoutes(app, routes);
// app.post('/set', (req, res) => {
//   const torrent = req.body.torrent
//   if (torrent){
//     return addUrl(torrent)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err))
//   }
// });

app.listen(3000)
