import {ChevronDown} from 'lucide-react'
import { Ellipsis } from 'lucide-react'
import { TrendingUp } from 'lucide-react'
import 'remixicon/fonts/remixicon.css'
import img from '../trendline.png'
import Industries from './Industries'


const Secondpage = () => {
  const Data = [
    {index:'1',
     logo:'https://i.pinimg.com/564x/c6/3b/6e/c63b6e4f0b37d05c06b9e349c7ae6499.jpg',
     Brand:'Chase',
     trend:<i class="ri-arrow-up-line">5%</i>,
     rate:'92.0%'
    },
    {index:'2',
     logo:'https://static.vecteezy.com/system/resources/previews/004/702/014/non_2x/simple-minimal-letter-r-logo-concept-isolated-on-white-background-vector.jpg',
     Brand:'Rho',
     trend:<i class="ri-arrow-up-line">1%</i>,
     rate:'89.8%'
    },
    {index:'3',
     logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXGWP1Yl3UbHpGI4d7Rx_2Sg08Vm5mRIqbQ&s',
     Brand:'American Express',
     trend:<i class="ri-arrow-down-line">1%</i>,
     rate:'85.2%',
     color:'red'
    },
    {index:'4',
     logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mAWkWv461jzrjMetdDdgcUR7MhyPtAQtvg&s',
     Brand:'Capital on Tap',
     trend:<i class="ri-arrow-up-line">5%</i>,
     rate:'78.0%'
    },
    {index:'5',
     logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzzjwGEbKypsuL2WOheEm6NYmZ444rVUFSQ&s',
     Brand:'US Bank',
     trend:<i class="ri-arrow-down-line">2%</i>,
     rate:'76.9%',
     color:'red'
    },
    {index:'6',
     logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYCiUEuCjPY8t_p0EGqLUaruFJncRo5DlMA&s',
     Brand:'Bill',
     trend:<i class="ri-arrow-up-line">1.8%</i>,
     rate:'72.3%'
    }
  ]
  return (
    <div>
        <div className='min-h-screen mt-20 mx-40 '>
      <h1 className=' text-pink-600'>Promts volumes</h1>
      <p className=' text-3xl p-2 font-bold'>Discover what millions of people ask AI</p>
      <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quia voluptates animi. Iusto, ducimus accusamus.</p>
      <button className='bg-[#38c278] text-white p-1.5 mx-3 rounded-[10px] '>Learn more</button>
      <div className='flex flex-col w-[90%] bg-white'>
       <div className=' w-full flex gap-2 mt-8 ml-8 mb-0.5 p-3 bg-white shadow-sm rounded-[10px]'>
        <div className='h-3 w-3 bg-gray-300 rounded-full'></div>
        <div className='h-3 w-3 bg-gray-300 rounded-full'></div>
        <div className='h-3 w-3 bg-gray-300 rounded-full'></div>
       </div> 
                {/* Sidebar */}
        <div className='flex'>
       <div className='flex flex-col bg-gray-100 h-150 ml-9 p-3 w-1/4'>
         <div className='flex '>
          <h1 className='text-[12px] mt-1.5 mr-5'>R</h1>
          <h1 className='font-medium cursor-pointer'>Rho</h1>
          <h1 className=' flex justify-center m-1 cursor-pointer '><ChevronDown size={18}/></h1>
          <h1 className='ml-30 cursor-pointer'><Ellipsis /></h1>
         </div>
         <div className='flex flex-col my-3 gap-3 text-gray-600 '>
           <h1 className=' flex gap-3 mt-2 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer '><i className="ri-home-4-fill"></i>Home</h1>
           <h1 className=' flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer '><i className="ri-search-line"></i>Search</h1>
           <h1 className=' flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer '><i className="ri-inbox-2-fill"></i>Inbox</h1>
         </div>
         <h1 className='text-gray-600 my-2'>Metrics</h1>
         <div className=' flex flex-col my-3 gap-3 text-gray-600'>
            <h1 className=' flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer'><i className="ri-building-fill"></i>Industry</h1>
            <h1 className=' flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer'><i className="ri-question-answer-fill"></i>Topic</h1>
            <h1 className=' flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer'><i className="ri-sparkling-fill"></i>Model</h1>
            <h1 className=' flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer'><i className="ri-at-line"></i>Citation</h1>
            <h1 className='flex gap-3 p-1 rounded-[10px] hover:text-black hover:bg-gray-300 cursor-pointer'><TrendingUp />Improve</h1>
         </div>
       </div>

       <div className='flex bg-white h-150 min-w-3/4 shadow-[12px_0_18px_-16px_rgba(0,0,0,0.45)]'>
          <div className='flex flex-col mt-2.5'>
          <h1 className='ml-6 text-gray-500 '>Rho <i className="ri-arrow-right-s-line"></i> Home</h1>
          <h1 className='text-2xl font-semibold ml-6 my-3 '>Home</h1>
          <div className='flex justify-between'>
            <div className=' flex gap-6 ml-6 text-xs'>
              <button className='hover:bg-gray-300 rounded'>Last 24 hours</button>
              <button className='hover:bg-gray-300  rounded'>Last 7 days</button>
              <button className='hover:bg-gray-300  rounded'>Last 30 days</button>
              <button className='hover:bg-gray-300  rounded'>Custom range <i className="ri-arrow-down-s-line"></i> </button>
            </div>
            <div className=' flex  text-xs ml-40 gap-3'>
               <button className='border-gray-200 p-1 px-2 border rounded-lg'><i className="ri-sparkling-fill"></i>All modles</button>
               <button className='border-gray-200 p-1 px-2 border rounded-lg'><i className="ri-earth-line"></i> Region</button>
               <button className='border-gray-200 p-1 px-2 border rounded-lg bg-[#2fa365] text-white'><i className="ri-equalizer-fill"></i> Filter</button>
            </div>
          </div> 
          <div className='w-[97%] h-0.5 ml-6 mt-3 bg-gray-100 '></div>
          <div className='ml-6 mt-3'>
            <h1 className='font-medium'>Brand visibility</h1>
            <p className='text-xs text-gray-500 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi?</p>
            <div className='w-[99%] h-0.5  mt-3 bg-gray-100 '></div>
          </div>
                  {/* LeftSection */}
          <div className='flex flex-row'>
           <div className='relative flex flex-col mx-6 mt-2 mb-0 w-[50%] after:absolute after:top-0 after:-right-3 after:h-full after:w-3 after:bg-linear-to-r after:from-black/8 after:to-transparent after:pointer-events-none'>
             <h1 className='font-medium'>Visibility score</h1>
             <div className='flex justify-between'>
               <div >
                <h1 className='font-medium text-2xl'>89.8%</h1>
               </div>
               <div className='flex text-sm px-1 py-0 gap-2'> 
                 <div className='bg-green-200 m-0 rounded-lg '>
                  <i className="ri-arrow-up-line"></i>
                  <span>1%</span>
                 </div> 
                 <h1 className='text-gray-500'> vs Last week </h1>
               </div>
             </div>
             <img className='w-full h-60 object-contain object-top' src={img} alt="" />
             <h1>Topic visibility</h1>
           </div>
           <div className='flex flex-col w-1/2'>
            <h1 className='mt-3'>Brand Industry Ranking</h1>
            {Data.map(function(elem,idx){
              return <Industries key={idx} index= {elem.index} logo={elem.logo} Brand={elem.Brand} rate={elem.rate} trend={elem.trend} color={elem.color} />
            })}
            
            </div>
          </div>
          </div>
       </div>
       </div>

     </div>
     </div> 
      
    </div>
  )
}

export default Secondpage
