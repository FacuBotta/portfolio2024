export function setupVideoScroll() {
  const video = document.getElementById("miVideo") as HTMLVideoElement;
  const videoContainer = document.getElementById(
    "video-container"
  ) as HTMLElement;

  if (video) {
    // Prevenir el scroll al principio
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };

    video.currentTime = 0;
    video.play();

    // Reproducir automáticamente los primeros 11 segundos
    const interval = setInterval(() => {
      if (video.currentTime >= 11) {
        video.pause();
        clearInterval(interval);
        // Después del segundo 11, permitir el control del video por scroll
        window.onscroll = function () {};
      }
    }, 100);

    // Escuchar el evento scroll
    window.addEventListener("scroll", () => {
      if (video.currentTime >= 11 && video.currentTime <= 22) {
        // Durante los segundos 11 y 15, solo controlamos el video
        syncVideoWithScroll();
      } else if (video.currentTime > 22) {
        // A partir del segundo 15, también permitimos el scroll en la página
        window.onscroll = null; // Permitimos el desplazamiento normal de la página
        syncVideoWithScroll(); // Seguimos controlando el video con el scroll
      }
    });

    // Función para sincronizar el video con el scroll
    const syncVideoWithScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = videoContainer.scrollHeight;

      let scrollFraction = scrollPosition / maxScroll;
      scrollFraction = Math.max(0, scrollFraction);
      scrollFraction = Math.min(1, scrollFraction);

      // Controlar el video solo entre los segundos 11 y 15
      const remainingTime = 11; // El intervalo es de 11 a 15 segundos
      video.currentTime = 11 + remainingTime * scrollFraction;

      // Ajustar la opacidad del contenedor según el scroll
      videoContainer.style.opacity = (1 - scrollFraction).toString();
    };
  }
}
