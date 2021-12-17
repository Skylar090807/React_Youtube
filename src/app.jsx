import React, { useEffect, useState } from 'react'
import './app.css'
import VideoList from './components/video_list/video_list'

function App() {
  //component가 mount되면
  const [videos, setVideos] = useState([]) //mostpopular videos 받아와서 비동기적으로 setVideos라는 API를 이용해 component data update

  useEffect(() => {
    const requestOptions = {
      //var를 썼다면 const로 바꾼다
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error))
  }, [])
  return <VideoList videos={videos} />
}

export default App
