const express = require("express");
const router = new express.Router();
const ytdl = require("ytdl-core");
const ytpl = require('ytpl');

router.post("/videoInfo", async (req, res) => {
  // nouvel utilisateur
  try {
    url = req.body.url;

    returnedStream = await ytdl.getInfo(url);
    return res.status(200).send({ data: returnedStream });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/playListInfo", async (req, res) => {
  // nouvel utilisateur
  try {
    url = req.body.url;
    const playlist = await ytpl(url);

    return res.status(200).send({ data: playlist });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});



module.exports = router;
