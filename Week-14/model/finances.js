const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../model/Schema");

const financeSchema = new Schema(
  {
    FD: { type: Number, value: Number },
    MF: { type: Number, value: Number },
    SAL: { type: Number, value: Number },
    EXP: { type: Number, value: Number },
    userid: { type: Schema.Types.ObjectId, ref: "User" },
    FILE: { type: String },
  },
  { timestamps: true }
);

const Finance = mongoose.model("finiancialdatas", financeSchema);
module.exports = Finance;
