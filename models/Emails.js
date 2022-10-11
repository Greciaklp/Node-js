import { Schema, model } from "mongoose";

const EmailSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

export default model("Email", EmailSchema);