import WorkSearch from './Components/WorkSearch';
import WorkCheckBox from './Components/WorkCheckBox';
// image 
import image from '/src/assets/Solutions/s-desktop.png';
  
function WorkBan(props) {

  return (
    <>
      <article className={`px-[130px] pt-[180px]  min-h-[60dvh] flex justify-center items-center relative
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:z-[-1]`}>
        <img className='z-[-2]' src={image}/>
        <section className='min-h-64 flex gap-24'>
          <WorkSearch/>
          <WorkCheckBox/>
        </section>
      </article>
    </>
  )
}

export default WorkBan
