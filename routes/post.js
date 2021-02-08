const express = require("express");
const routerpost = express.Router();
const mongoose = require("mongoose");
const postschema = require("../module/Post");
routerpost.get("/", (req, res) => {
  postschema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

routerpost.post("/", (req, res) => {
  const post = new postschema({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  });

  post
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ mssg: err }));
});

routerpost.get("/:id", (req, res) => {
  postschema
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

routerpost.patch("/:id", (req, res) => {
  postschema
    .updateOne({ __id: req.params.id }, { $set: { title: req.body.title } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

routerpost.delete("/:id", (req, res) => {
  postschema
    .remove({ __id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = routerpost;
