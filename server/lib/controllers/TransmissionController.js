import TransmissionHelper from "../helpers/TransmissionHelper";

const TransmissionController = {
  addUrl: (req, res) => {
    if (req.body.torrent) {
      TransmissionHelper
        .addUrl(req.body.torrent)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }
}

export default TransmissionController;
