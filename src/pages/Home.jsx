import { ReactComponent as Github } from '../images/icons/icons8-github.svg'
import { ReactComponent as Insta } from '../images/icons/icons8-insta.svg'
import { ReactComponent as Tele } from '../images/icons/icons8-telegram.svg'
import { ReactComponent as Face } from '../images/icons/icons8-facebook.svg'
import {HomeData} from './HomeData'
function Home() {
  return (<>
  <div className='grid gap-y-40'>
  <div className="flex justify-between flex-wrap">
       <div className="grid gap-y-4">
        <p className="text-lg">Front-end Developer</p>
        <h2 className="text-7xl font-bold leading-tight ">Hello I'm<br/><span  className="text-Secondary-fc">Melad Duraid</span></h2>
        <p className="mt-2 opacity-80 -tracking-tight leading-loose">I bring pixels to life with code,Crafting seamless<br/>
        experiences with creativity, Turning visions into<br/>engaging realities.</p>
        <div className="flex justify-between">
        <button className="homeType flex py-3 w-1/2 gap-3">
          DOWNLOAD CV
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
          <button className="homeType"><Github/></button>
          <button className="homeType font-bold"><Insta/></button>
          <button className="homeType"><Tele/></button>
          <button className="homeType"><Face/></button>
        </div>
       </div>
    </div>
    <section className='flex w-full justify-between flex-wrap'>
      {HomeData.map((item,index)=>{
        return <div key={index} className='flex w-36 items-center gap-4'>
          <h2 className=' text-6xl font-bold opacity-80'>{item.Num}</h2>
          <h3 className="opacity-80 -tracking-tight">{item.title}</h3>
          </div>
        })}
        </section>
  </div>
  </>);
}

export default Home;