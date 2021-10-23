import axios from "axios"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3?",
  // params: {
  //   part: "snippit",
  //   maxResult: 5,
  //   key: "588235843227-iollsja4s21kd9qf9rusvkjguvbi6tjv.apps.googleusercontent.com",
  // },
})
