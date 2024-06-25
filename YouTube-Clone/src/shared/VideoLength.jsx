import React from 'react'
import moment from 'moment/moment'

const VideoLength = ({time}) => {

    const VideoLengthSeconds = moment().startOf('day').seconds(time).format("H:mm:ss")

  return (
    <div className=' absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md' >
      { VideoLengthSeconds}
    </div>
  )
}

export default VideoLength
