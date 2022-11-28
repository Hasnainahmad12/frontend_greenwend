import React from 'react'
import "../Styles/Cards.css"

const Cards = ({ImgSrc, Title, Desc, Learn}) => {
  return (
    <div className='cards'>
            <div className='h-[480px] w-[410px]'>
                <img src={ImgSrc} className='cards__image' alt='' />
                <div className='text-center mt-4'>
                <p className='cards__title'>{Title}</p>
                <p className='cards__desc'>{Desc}</p>
                <p className='cards__learn'>{Learn}</p> 
                </div>
            </div>
    </div>
  )
}

export default Cards