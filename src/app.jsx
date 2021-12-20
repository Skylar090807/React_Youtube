import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import VideoList from './components/video_list/video_list'
import SearchHeader from './components/search_header/search_header'
import VideoDetail from './components/video_detail/video_detail'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setselectedVideo] = useState(null)

  const selectVideo = (video) => {
    setselectedVideo(video)
  }

  const search = (query) => {
    youtube
      .search(query) //
      .then((video) => {
        setVideos(video)
        setselectedVideo(null)
      })
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos))
  }, [youtube])
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  )
}

export default App
