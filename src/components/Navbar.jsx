import React from 'react'


const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-white flex justify-between px-4 py-2 h-14 items-center'>
      <div className='font-serif text-xl md:text-2xl'><span className='text-orange-600 font-bold'>&lt;</span>Pas<span className='text-orange-600 text-[35px]'>S</span>ecure/<span className='text-orange-600 font-bold'>&gt;</span></div>
     {/* <ul  >
        <li className='flex gap-7 font-semibold '>
            <a className='hover:text-emerald-600 ' href="#">Home</a>
            <a className='hover:text-emerald-600' href="#">About</a>
            <a className='hover:text-emerald-600' href="#">Contact</a>
        </li>
      </ul> */}

      <button className='text-white bg-teal-600 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1 min'> 
                    {/* <img className='invert w-8 md:w-10 p-1' src="src/public/icons/github.svg" alt="github logo" /> */}
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
    </nav>
  )
}

export default Navbar
