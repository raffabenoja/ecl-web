import React from "react"
import PropTypes from "prop-types"

const VimeoPlayer = ({ autoplay, src, width, height, title }) => {
  let newSrc = ""

  if (autoplay) {
    newSrc = `${src}?rel=0&autoplay=1`
  } else {
    newSrc = src
  }

  console.log("src", newSrc)

  return (
    <iframe
      src={newSrc}
      width={width}
      height={height}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      title={title}
    ></iframe>
  )
}

VimeoPlayer.propTypes = {
  autoplay: PropTypes.bool,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
}

VimeoPlayer.defaultProps = {
  autoplay: true,
  height: "360",
  width: "640",
}

export default VimeoPlayer
