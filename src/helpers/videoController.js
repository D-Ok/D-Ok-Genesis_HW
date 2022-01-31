export default (video, isPause) => {
  if (isPause) video.pause()
  else video.play()
}
