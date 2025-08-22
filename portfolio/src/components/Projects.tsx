import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>{PROJECTS.map((projects,index)=>(
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
            <img width={200} height={150} src={projects.image} alt={projects.title} className="mb-6 rounded "/>
            </motion.div>

            <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4">
              <div className="flex items-center gap-4 mb-2">
                <h6 className="font-semibold">{projects.title}</h6>
                {projects.demoLink && (
                  <a 
                    href={projects.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-1 text-sm bg-purple-800 text-white rounded hover:bg-purple-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              <p className="mb-4 text-neutral-400">{projects.description}</p>
              <div className="flex flex-wrap gap-2">
                {projects.technologies.map((tech, index)=>(
                  <span key={index} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
        </div>
     </div>   
  )
}

export default Projects