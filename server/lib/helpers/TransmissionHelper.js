import Transmission from 'transmission';
import config from "../../config";

const transmission = new Transmission(config);

const TransmissionHelper = {};

TransmissionHelper.addUrl = (torrent) => {
  return new Promise((resolve, reject) => {
    transmission.addUrl(torrent, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

export default TransmissionHelper;
