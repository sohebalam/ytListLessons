import mongoose from "mongoose"

// const { ObjectId } = mongoose.Schema

const ytListSchema = new mongoose.Schema(
  {
    videos: [{}],
  },

  { timestamps: true }
)

export default mongoose.models.ytList || mongoose.model("ytList", ytListSchema)
