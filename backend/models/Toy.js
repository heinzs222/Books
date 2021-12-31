const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const ToySchema = Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    animal: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = model("Toy", ToySchema);
