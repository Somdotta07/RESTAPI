const express = require("express");
const router = express.Router();

const Actor = require("../model/Actor.js");
//Get all
router.get("/", async (req, res) => {
  try {
    const allData = await Actor.find();
    res.json(allData);
  } catch (err) {
    res.json({ message: err });
  }
});
// Add data
router.post("/", async (req, res) => {
  const actor = new Actor({
    name: req.body.name,
    bio: req.body.bio,
  });

  try {
    const savedData = await actor.save();
    res.json(savedData);
  } catch (err) {
    res.json({ message: err });
  }
});

//Find one
router.get("/:id", async (req, res) => {
  try {
    const singleData = await Actor.findById(req.params.id);
    res.json(singleData);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update one

router.patch("/:id", async (req, res) => {
  try {
    const updatedData = await Actor.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          name: req.body.name,
          bio: req.body.bio,
        },
      },
    );
    res.json(updatedData);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete one

router.delete("/:id", async (req, res) => {
  try {
    const removedData = await Actor.deleteOne({
      _id: req.params.id,
    });
    res.json(removedData);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
