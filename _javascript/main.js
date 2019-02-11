document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  function scrollPageTo(targetId) {
    let target = document.getElementById(targetId)
    target.scrollIntoView({behavior: "smooth"})
    if (targetId === 'video') {
      let video = document.getElementById('videoPlayer')
      video.play()
    }
}
