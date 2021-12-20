import React from 'react'
import styles from './video_item.module.css'

const VideoItem = (
  { video: { snippet } }, //props에서도 deconstructing이 가능하다. 인자에서 props안에 있는 video를 열어서 받아올 수 있다. 계속 반복되는 video 안에있는 snippet도 deconstructing이 된다.
) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="Video Thumbnail" />

      {/*meta data info*/}
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
)

export default VideoItem
