import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import VideoItem from "./VideoItem"

const VideoList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState({})
  // const listOfVideos = videos?.map((video) => (
  //   <Button key={video.id} onClick={() => setSelectedVideo(video)}>
  //     <VideoItem video={video} />
  //   </Button>
  // ))

  console.log(selectedVideo)

  return (
    // <Grid container spacing={10} onClick={()=>}>
    //   {listOfVideos}
    // </Grid>
    <>
      {videos?.map((video) => (
        <Button key={video.id} onClick={() => setSelectedVideo(video)}>
          <VideoItem video={video} />
        </Button>
      ))}
    </>
  )
}

export default VideoList
