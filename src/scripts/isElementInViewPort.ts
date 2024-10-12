export function observeElementInViewport(
  element: HTMLElement,
  callback: CallableFunction,
  threshold = 0
) {
  if (!element) {
    throw new Error("Invalid Element Provided");
  }

  // Configuración del observer
  const observerOptions = {
    root: null, // null significa que usamos el viewport
    threshold: threshold, // Umbral para determinar cuánto del elemento debe ser visible
  };

  // Callback que se ejecuta cada vez que el elemento entra o sale del viewport
  const observerCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      const isVisible = entry.isIntersecting;
      const visibilityPercentage = entry.intersectionRatio * 100;
      const boundingBox = entry.boundingClientRect;

      // Llama al callback proporcionado con los datos actualizados
      callback({
        isVisible: isVisible,
        visibilityPercentage: visibilityPercentage,
        position: {
          top: boundingBox.top,
          left: boundingBox.left,
          bottom: boundingBox.bottom,
          right: boundingBox.right,
        },
      });
    });
  };

  // Crear el observer y empezar a observar el elemento
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(element);

  // Retornar el observer para poder dejar de observar si se desea más adelante
  return observer;
}
