import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// if mongoose.models.Topic doesnt exist on DB create a new one based on schema above
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
