import React from 'react'
import {brainwave} from'../assets'
import {navigation} from'../constants/index'
const Header = () => {
  return (
    <div className='fixed top-0 z-50 bg-neutral-700-800 backdrop-blur-sm border-b border-neutral-800'>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10'>
        <a className='block w-[12rem] xl:mr-8' href="#hero" >
            <img src={brainwave} width={190} height={40} alt='Brainwave' />
        </a>
        <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-neutral-50 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'> 
              {navigation.map((item)=>(
                <a key={item.id} href={item.url} className={`block relative font-code text-1xl  uppercase px-18 py-6`}>
                   <span className=' text-neutral-100 transition-colors hover:text-indigo-400 font-extralight'>{item.title}
                    </span> 
                </a>
             ))}

              
               
            </div>
        </nav>
        </div>


    </div>
  )
}

export default Header