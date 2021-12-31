const express = require("express");
const Toy = require("../models/Toy");
const router = express.Router();

//GET/allToys
// .../api/toys
router.get("/", async (req, res) => {
    const toy = await Toy.find();
    try {
        return res.status(200).json(toy);
    } catch (error) {
        return res.status(500).json({ message: "couldn't get toys" });
    }
});
// GET/toy/:id->singleToy
router.get("/toy/:id", async (req, res) => {
    const { id } = req.params;
    const singleToy = await Toy.findById(id);
    try {
        return res.status(200).json(singleToy);
    } catch (error) {
        return res.status(500).json({ message: "couldn't retrieve the toy" });
    }
});
//GET/toyById

//POST/toy
// .../api/toys/toy
router.post("/toy", async (req, res) => {
    const toyToCreate = await Toy.create(req.body);
    try {
        return res.status(201).json(toyToCreate);
    } catch (error) {
        return res.status(500).json({ message: "Couldn't create Toy" });
    }
});
//PUT/toy -> update
router.put("/toy/:id", async (req, res) => {
    const { id } = req.params;
    const toyToUpdate = await Toy.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    try {
        return res.status(202).json(toyToUpdate);
    } catch (error) {
        return res.status(500).json({ message: "couldn't update the toy" });
    }
});

//DELETE/toy/Id
router.delete("/toy/:id", async (req, res) => {
    const { id } = req.params;
    const toyToDelete = await Toy.findByIdAndDelete(id);
    try {
        return res.status(203).json({ message: "Toy removed" });
    } catch (error) {
        return res.status(500).json({ message: "couldn't delete the toy" });
    }
});

module.exports = router;
