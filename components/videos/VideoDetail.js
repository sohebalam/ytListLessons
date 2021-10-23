import React from "react"

import { CircularProgress, Paper, Typography } from "@material-ui/core"
import { useSelector } from "react-redux"

const VideoDetail = () => {
  // TODO - Spinner

  const selectVideo = useSelector((state) => state.selectVideo)

  const { loading, error, video } = selectVideo

  if (loading) return <CircularProgress />

  // console.log(video)

  const videoId = video?.snippet.resourceId.videoId

  const title = video?.snippet.title
  const channelTitle = video?.snippet.channelTitle
  const description = video?.snippet.channelTitle

  // console.log(videoId, title, channelTitle, description)

  const videoSrc = `https://www.youtube.com/embed/${videoId}`

  // console.log(videoSrc)

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "100%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTitle}{" "}
        </Typography>
        <Typography variant="subtitle1">{channelTitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetail
