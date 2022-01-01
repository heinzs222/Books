const mongoose = require("mongoose");
const { schema } = require("./Toy");
const { model, Schema } = mongoose;

const BuySchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
