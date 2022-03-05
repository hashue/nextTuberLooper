import { useState } from 'react'
import { apiClient } from '~/utils/apiClient'
import { Options } from 'react-youtube'
import styles from '~/styles/Home.module.css'
import Youtube from 'react-youtube'
import Footer from '../components/fotter.tsx'

const option: Options = {
  height: '360',
  width: '640',
  playerVars: {
    loop: 1
  }
}

const Home = () => {
  const [id, setId] = useState('')

  const extractVideoId = (str: string) => {
    apiClient.getVideoId.$get({ query: { url: str } }).then((res) => {
      setId(res)
    })
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Youtube videoId={id} opts={option} />
        <input
          id="url"
          type="text"
          placeholder="youtubeのurlを入力してください。"
          onChange={(e) => extractVideoId(e.target.value)}
          style={{
            width: '400px',
            padding: '1.2vh',
            marginTop: '5vh',
            backgroundColor: 'white',
            border: 'solid 2.6px #e0e0e0',
            borderRadius: '8px'
          }}
        />
        <Footer />
      </main>
    </div>
  )
}

export default Home
