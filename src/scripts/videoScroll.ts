export function setupVideoScroll() {
  const video = document.getElementById("miVideo") as HTMLVideoElement;
  const videoContainer = document.getElementById(
    "video-container"
  ) as HTMLElement;

  if (video) {
    // Función para sincronizar el video con el scroll
    const syncVideoWithScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = videoContainer.scrollHeight;
      let scrollFraction = scrollPosition / maxScroll;
      scrollFraction = Math.max(0, scrollFraction);
      scrollFraction = Math.min(1, scrollFraction);
      video.currentTime = video.duration * scrollFraction;
      console.log(scrollFraction);
      videoContainer.style.opacity = (1 - scrollFraction).toString();
    };

    // Escuchar el evento scroll y sincronizar el video
    window.addEventListener("scroll", () => {
      syncVideoWithScroll();
    });

    // Asegurarse de que el video no se reproduzca automáticamente
    video.addEventListener("loadedmetadata", () => {
      video.pause(); // No queremos que se reproduzca automáticamente
    });
  }
}
