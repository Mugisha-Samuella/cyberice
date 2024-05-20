import React from 'react'
import Resources from '../../Pages/Resources'

const ResourcesCards = (props) => {
  return (
    <>
      <div className='w-full justify-center items-center  flex flex-col md:flex-row'>
          <div className=' flex flex-row  justify-center items-center gap-4 md:flex-col shadow-md p-4'>
               <img src={props.img} style={{width:125}} alt="" />
               <div className=' max-w-[15rem]'>
                <h2 className='text-xl font-semibold font-Poppins'>{props.name}</h2>
                <h3 className='text-slate-600'>{props.author}</h3>
                <p className=''>{props.description}</p>
                
                <div style={{color: 'yellow'}} className="flex flex-row">
                <h3 >{props.star}</h3>
                <h3>{props.star}</h3>
                <h3>{props.star}</h3>
                <h3>{props.star}</h3>
                <h3>{props.halfStar}</h3>
                </div>
               </div>
          </div>
      </div>
    </>
  )
}

export default ResourcesCards
