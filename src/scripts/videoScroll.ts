const skipAnimation = localStorage.getItem("skipAnimation");
const video = document.getElementById("miVideo") as HTMLVideoElement;
const videoContainer = document.getElementById(
  "video-container"
) as HTMLElement;

export function setupVideoScroll() {
  if (video) {
    if (skipAnimation === "true") {
      window.onscroll = null;
      // TODO: aca deberia reajustar cuando cambie el video...
      video.currentTime = 11.5;
    } else {
      // Prevenir el scroll al principio
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
      video.currentTime = 0;
    }
    video.play();

    // Reproducir automáticamente los primeros 11 segundos, cuando dejo de tipear
    const interval = setInterval(() => {
      if (video.currentTime >= 11.5) {
        video.pause();
        clearInterval(interval);
        // Después del segundo 11, permitir el control del video por scroll
        window.onscroll = function () {};
      }
    }, 100);

    window.addEventListener("scroll", () => {
      if (video.currentTime >= 11.5 && video.currentTime <= 22) {
        syncVideoWithScroll();
      } else if (video.currentTime > 22) {
        window.onscroll = null;
        syncVideoWithScroll();
      }
    });

    const syncVideoWithScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = videoContainer.scrollHeight;

      let scrollFraction = scrollPosition / maxScroll;
      scrollFraction = Math.max(0, scrollFraction);
      scrollFraction = Math.min(1, scrollFraction);

      const remainingTime = 11.5; // El intervalo es de 11 a 15 segundos
      video.currentTime = 11.5 + remainingTime * scrollFraction;

      // Ajustar la opacidad del contenedor según el scroll
      videoContainer.style.opacity = (1 - scrollFraction).toString();
    };
  }
}
