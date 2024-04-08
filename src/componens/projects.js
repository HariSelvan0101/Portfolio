import webSideimg1 from '../assets/ecommerce-websites.jpg'
import webSideimg2 from '../assets/food-ecommerce.jpg'
import webSideimg3 from '../assets/website-blog.jpg'
import webSideimg4 from '../assets/portfolio1.jpg'

export default function Projects(){
    const config={
        projects :[
            {
            image:webSideimg1,
            description:' A E-commerce website build with MERN stack',
            link:'https://github.com/HariSelvan0101/B2C'
            },
            {
                image:webSideimg2,
                description:' Food E-commerce website build with Node js ,Eexpress js',
                link:''
            },
            {
                image:webSideimg3,
                description:'  Basic Blog  website biuld with React & Tailwind',
                link:''
            },
            {
                image:webSideimg4,
                description:' The Amazing Portfolio website build with React js ,HTML,JavaScript and Tailwind css',
                link:''
                }
        ]
    }
    return <section id='projects'  className="flex flex-col justify-center px-10 py-8 bg-secondery text-white gap-7">
        <div className="w-full ">
            <div className="flex flex-col px-10 ">
            <h1 className="font-pro-font border-b-4 text-4xl border-primary text-bold w-[140px] font-bold">Projects</h1> 
            <p className='py-5'>
                These are my best Projects . I have build this with React Tailwind css and HTML , check them out 
            </p>
            </div>
          
        </div>
        <div className="w-full " >
           <div className='flex  flex-col md:flex-row  gap-9 px-10'>
            {config.projects.map((project)=>( 
                
            <div className='relative '>
                <img src={project.image} className='h-[200px]' />
                <div className='project-desc'>
                    <p className='text-center py-5 px-5'>
                       {project.description}
                    </p>
                    <div className='flex justify-center'>
                        <a  target='_blank' className='btn' href={project.link} >view project</a>
                    </div>
                </div>
            </div>
           
        ))}
           
           
            
           </div>
        </div>
    </section>
}