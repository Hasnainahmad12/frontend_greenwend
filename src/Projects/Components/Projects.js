import React from 'react'
import "../Styles/Projects.css";

const Projects = ({ImgSrc, Title, Learn}) => {
  return (
    <div>
        <div className='mt-14 project__div'>
            <img src={ImgSrc} className="project__image" alt='' />
           <div className='h-16 w-96 bg-slate-500'>
                <p className='projects__title'>{Title}</p>
           </div>
            <p className='projects__learn'>{Learn}</p>
        </div>
    </div>
  )
}

export default Projects