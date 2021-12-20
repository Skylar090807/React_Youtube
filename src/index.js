import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import reportWebVitals from './reportWebVitals'
import '@fortawesome/fontawesome-free/js/all.js'
import Youtube from './service/youtube'

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)
ReactDOM.render(
  //ReactDOM 라이브러리 가져와 최상위 Component연결
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root'),
) //Ctrl + click 하면 해당 component로 이동

reportWebVitals()
