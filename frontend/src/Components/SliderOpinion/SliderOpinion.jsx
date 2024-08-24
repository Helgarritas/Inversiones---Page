  
export default function SliderOpinion({background,color,items}) {
  return (
    <div className="relative flex items-center homeSlider">
      <div className="relative flex max-w-[100vw] overflow-hidden homeSlider__container" style={{background: `${background}`}}>
        <div className="flex w-max animate-marquee [--duration:20s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((obj, index) => (
            <div key={index} className="h-full px-2.5 homeSlider__card">
              <div className="relative h-full rounded-2xl  px-8 ">
                <p style={{color: `${color}`}} className="homeSlider__description">{obj.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}