import { useEffect, useRef } from "react"
import videojs from "video.js"
import 'video.js/dist/video-js.css';

// Forest
import '@videojs/themes/dist/forest/index.css';

const ReactVideoPlayer = ({ options , themeName="forest" }) => {
    const videoRef = useRef()
    const playerRef = useRef()

    useEffect(() => {
        const player = playerRef.current

        if(!player) {
            const videoElement = videoRef.current
            if(!videoElement) return;

            playerRef.current = videojs(videoElement , options)
        }

        return () => {
            if(player) {
                player.dispose()
                playerRef.current = null
            }
        }
    },[options , videoRef , playerRef])

  return (
    <div data-vjs-player>
        <video ref={videoRef} width={800} className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}/>
    </div>
  )
}

export default ReactVideoPlayer