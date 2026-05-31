import React from 'react'
import Navbar from './assets/components/navbar'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  console.log('running')
  return (
    <div className='flex'>
      <div id='top' className=' h-125 w-full bg-transparent '>
      <div className='flex  justify-between'> 
      <h1 className='text-white m-7 text-xs font-normal'>#Get Your Adventure</h1>
     <div className='flex gap-7 mr-10 mt-7 text-xs'>
     <Navbar title = 'Home' />
     <Navbar title = 'Explore' />
     <Navbar title = 'News' />
     <Navbar title = 'About' />
     </div>
     </div>
    
     <div className='flex justify-between  ml-5 '>
     <h1 className='text-5xl font-semibold font-(Montserrat) text-white gap-2' >Where Leavés <br />Breathe</h1>
     <h1 className='text-right mr-5 mt-17 leading-none text-[#ffffffd8]'>- Where <br />the Forest <br />Holds Your <br /> Souls</h1>
     </div>

     <div  className='flex justify-between text-[#ffffffd8]  ml-5'>
      <p className='text-justify max-w-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, reiciendis sint adipisci asperiores quibusdam sit quod reprehenderit numquam, vitae odio ab quidem ad illo delectus! Quibusdam nisi voluptate facilis sint.</p>
       <h2 className='m-5 text-xs mt-20'>Achieved by <span>Refi Mariska</span><br />instagram.com/<span>reppiii_</span></h2>
     </div>

     <div id='image-container' className='flex  gap-32 ml-20 '>
      <img className='h-37 w-70 object-cover rounded-2xl border-white border' src="https://i.pinimg.com/control1/1200x/a6/bd/4d/a6bd4db7ee7053689bd971b36cbcd1ef.jpg" alt="" />
      <img id='second-img' className='h-37 w-150 object-cover rounded-2xl border-white border' src="https://i.pinimg.com/736x/af/ad/62/afad62fd7673be6b4c2c7c19bb8c3bf0.jpg" alt="" />
       <div id='links' className='flex flex-col text-2xl text-white font-extralight bg-[#f5f3f369] p-2 rounded-full'><i class="ri-instagram-line"></i><i class="ri-tiktok-fill"></i><i class="ri-facebook-fill"></i><i class="ri-share-forward-fill"></i></div>
     </div>
     </div>
    </div>
  )
}

export default App
