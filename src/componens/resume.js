import resumeImage from '../assets/resume.jpg'

export default function Resume(){
    const config={
        link:'https://drive.google.com/file/d/1di4uz3h5J2eDQCByCZtIL8O1Fa9quYZc/view?usp=drive_link'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-primary'>
        <div className='flex md:w-1/2 justify-center'>
        <div className='flex flex-col justify-center text-white px-3'>
        <h1 className="font-pro-font border-b-4 text-4xl  text-bold w-[130px] font-bold">Resume</h1> 
        <p className='text-xl py-5'> You can view my Resume </p>
        <a className='bg-[#443184] px-5 py-2 scroll-mt-2 rounded  hover:border-2 border-white w-[120px]' href={config.link}>Download</a>
        </div>
        </div>
        <div className='py-5 md:w-1/2 flex justify-left '>
            <img className='w-[400px] rounded ' src={resumeImage} />
        </div>
    </section>
}