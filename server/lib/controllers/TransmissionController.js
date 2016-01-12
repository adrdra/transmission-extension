import TransmissionHelper from "../helpers/TransmissionHelper";

const TransmissionController = {
  addUrl: (req, res) => {
    if (req.body.torrent) {
      TransmissionHelper
        .addUrl(req.body.torrent)
        .then((response) => res.json(response))
        .catch((err) => res.status(400).send(err))
    }
  }
}

export default TransmissionController;
