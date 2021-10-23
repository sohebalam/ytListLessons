import { Grid } from "@material-ui/core"
import VideoDetail from "../components/videos/VideoDetail"
import { useEffect, useState } from "react"
import VideoList from "../components/videos/VideoList"
import { getSingleCourse } from "../redux/actions/lessonActions"
import { wrapper } from "../redux/store"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems"

const playlistId = "PL25nRqESo6qH6t-8NcPRE20XSThI2JgTa"

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
//   )

//   // console.log(res)
//   const data = await res?.json()

//   const { snippet } = data.items[0]

//   console.log(snippet.resourceId.videoId, snippet.thumbnails.default.url)

//   return {
//     props: {
//       data,
//     },
//   }
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { params, req } = context

    // console.log("params", params)

    const slug = "fdzsf"

    await store.dispatch(getSingleCourse(req, slug))
  }
)

const Index = () => {
  const [videos, setVideos] = useState([])
  // const [onSelectedVideo, setOnSelectedVideo] = useState({})
  const [selectedVideo, setSelectedVideo] = useState({})

  const singleCourse = useSelector((state) => state.singleCourse)
  const { loading, error: courseError, course } = singleCourse

  const data = course

  console.log(selectedVideo)

  const { items } = data

  useEffect(() => {
    setVideos(items)
  }, [])

  return (
    <Grid
      container
      justifyContent="center"
      style={{ marginBottom: "12rem", marginTop: "0.75rem" }}
    >
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            {/* <SearchBar onSubmit={handleSubmit} /> */}
            {/* input field */}
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
