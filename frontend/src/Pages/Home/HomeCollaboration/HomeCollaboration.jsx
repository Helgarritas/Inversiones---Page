import { Sparkles } from "./Sparkles";
import { useEffect, useState } from "react";

import image1 from '/src/assets/Backgrounds/Mask group.png';
import image2 from '/src/assets/Backgrounds/Mask group-2.png';
import image3 from '/src/assets/Backgrounds/Mask group-3.png';
import image4 from '/src/assets/Backgrounds/Mask group-4.png';

let data = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];

export default function HomeCollaboration() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mode = document.documentElement.classList.contains('dark');
    setIsDarkMode(mode);

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          const mode = document.documentElement.classList.contains('dark');
          setIsDarkMode(mode);
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      <div className="mt-32 w-screen">
        <div className="text-center text-3xl dark:text-contPrimary">
          <span className="text-[#f5cb1f]">Confianza con expertos</span>
          <br />
          <span>Unidos con líderes</span>
        </div>

        <div className="mt-14 flex justify-center gap-24">
          {data.map((obj, index) => (
            <div className="relative aspect-[3/2] h-[100px]" key={index}>
              <img className="filter" src={obj.image} alt="Brand image" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#f9de4b,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-black/10 after:bg-zinc-300 dark:after:border-white/10 dark:after:bg-zinc-800">
        <Sparkles
          color={isDarkMode ? '#ffffff' : '#000000'}
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}
