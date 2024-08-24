import { Globe } from "./Globe";
import { useState, useEffect } from "react";

export default function Earth() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica el modo oscuro al montar el componente
    const mode = document.documentElement.classList.contains('dark');
    setIsDarkMode(mode);

    // Crea un observador para detectar cambios en los atributos del elemento html
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          const mode = document.documentElement.classList.contains('dark');
          setIsDarkMode(mode);
        }
      }
    });

    // Observa cambios en los atributos del elemento html
    observer.observe(document.documentElement, {
      attributes: true,
    });

    // Desconecta el observador cuando el componente se desmonta
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center">
      <div className={`group relative flex h-80 max-w-md flex-col overflow-hidden rounded-2xl border border-black/10 bg-zinc-200
        dark:border-white/10 dark:bg-white/10`}>
        <div className="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"></div>

        <div>
          <Globe
            dark={isDarkMode ? true : false}
            baseColor="#777A80"
            glowColor="#50505A"
            markerColor="#f5cb1f"
            opacity={0.85}
            brightness={1}
            offsetX={320}
            offsetY={64}
            scale={1.125}
          />
        </div>

        <div className="pointer-events-none mt-auto px-6 pb-6">
          <div className="relative transition duration-300">
            <div className="text-lg transition-all duration-300 text-black dark:text-white">
              Enfoque Global y Sostenible
            </div>
            <p className="mt-2 text-sm font-light leading-relaxed text-black/75 dark:text-white/75">
              Realizamos operaciones seguras y eficientes teniendo énfasis en preservar nuestros recursos naturales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
