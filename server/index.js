import Express from 'express';
import Transmission from 'transmission';
import config from "./config"

const app = Express();
const transmission = new Transmission(config);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/configure', () => {});

app.post('/set', (req, res) => {
  const torrent = req.body.torrent

  if (torrent){
    return transmission.addUrl(torrent, (err, args) => {
      if (err) {
        return console.log('error', err);
      }

      return console.log(args);
    })
  }
});

app.listen(3000)
