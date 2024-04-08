import HeroImg from '../assets/image1.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config={
        line1:'Im a Full-Stack Developer',
        social:{
            twitter:'https://x.com/Hariselvan545/',
            facebook:'https://www.facebook.com/hari.selvan.334/',
            linkedIN:'https://www.linkedin.com/in/hariharan-s-6a755b225/'
        }
    }
    return <section className='flex flex-col md:flex-row px-6 py-25 bg-secondery justify-center '>
        <div className='md:w-1/2 flex flex-col py-11' >
        <h1 className=' text-white text-6xl font-hero-font'>Hi,<br />I'm <span className='text-blue-600 text-5xl'>VS</span> Hari 
        <p className='text-2xl'>{config.line1}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
            <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedIN}  className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
       <div className='md:w-1/3 w-full h-full'>
       <img className='pl-6 pr-14 py-0 secondery-img drop-shadow-4xl w-full h-full pl-15 pt-7 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' src={HeroImg} alt="" />
      
       </div>
        
        
      
    </section>
}