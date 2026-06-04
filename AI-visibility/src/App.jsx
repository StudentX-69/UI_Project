import FloatingCard from './Assets/images/components/Cards'
import Image from './Assets/images/components/Image';
import Secondpage from './Assets/images/components/Secondpage';
import img from './Assets/images/icon.jpg'

const App = () => {
  const positionClasses = {
    "left-top": "-left-3 top-40 rotate-6",
    "left-middle": "left-45 top-1/2 -translate-y-1/2 -rotate-10",
    "left-bottom": "left-[30%] bottom-40",
    "right-top": "-right-5 top-40 -rotate-6",
    "right-middle": "right-50 top-1/2 -translate-y-1/2 rotate-10",
    "center-bottom": "left-[58%] -translate-x-1/2 bottom-40",
  };
  const PositionImage = {
     "1":"rotate-7",
     "2":"-rotate-7",
     "3":"rotate-7",
     "4":"-rotate-7",
     "5":"rotate-7",
     "6":"-rotate-7",
     "7":"rotate-7"
  };

  const floatingCards = [
  {
    title: "Number of Pages Indexed",
    description: "Proper pages indexed on your brand",
    value: "9",
    trend: "↑ 3",
    trendColor: "green",
    position: "left-top"
  },
  {
    title: "Number of Conversations",
    description: "Humans publishing tools on your site",
    value: "12.3k",
    trend: "↑ 1k",
    trendColor: "green",
    position: "left-middle"
  },
  {
    title: "Referrals from AI Search",
    description: "Human visits referred by AI Search Engines",
    value: "65k",
    trend: "↓ 4k",
    trendColor: "red",
    position: "left-bottom"
  },
  {
    title: "Share of Voice",
    description: "Mentions of your brand relative to competitors",
    value: "56%",
    trend: "↓ 4%",
    trendColor: "red",
    position: "right-top"
  },
  {
    title: "AI Traffic Percentage",
    description: "Percentage of traffic from AI Chatbots",
    value: "24.2%",
    trend: "↑ 3.4%",
    trendColor: "green",
    position: "right-middle"
  },
  {
    title: "Visibility Score",
    description: "How often your brand appears in answers",
    value: "86%",
    trend: "↑ 8%",
    trendColor: "green",
    position: "center-bottom"
  }
];

const Logos = [
  {img:"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F25175a25-0287-48d2-b577-ac6f3f00a522_400x400.jpeg",
   position: "1"
  },
  {img:"https://grok.com/icon-512x512.png",
   position: "2"
  },
  {img:"https://logosandtypes.com/wp-content/uploads/2025/06/Microsoft-Copilot-scaled.png",
   position: "3"
  },
  {img:"https://www.podfeet.com/blog/wp-content/uploads/2025/03/claude-logo-1040x520-1.png",
   position: "4"
  },
  {img:"https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg",
   position: "5"
  },
  {img:"https://1000logos.net/wp-content/uploads/2025/02/deepseek-icon.webp",
   position: "6"
  },
  {img:"https://www.androidsage.com/wp-content/uploads/2025/07/Google-Gemini-New-Logo.jpg",
   position: "7"
  },
]
  return (
    <div className='flex flex-col'>
                          {/* Navbar */}
      <div className='flex  m-2 mx-50 p-2 w-[70%] shadow-xl rounded-2xl '>
      <nav className='flex items-center w-full'>
        <img className='h-10 mr-[15%] rounded-xl' src={img} alt="" />
        <ul className='flex gap-10'>
          <li className='p-1 rounded hover:bg-gray-100 '>Community</li>
          <li  className='p-1 rounded hover:bg-gray-100' >Resource</li>
          <li  className='p-1 rounded hover:bg-gray-100'>Pricing</li>
          <li  className='p-1 rounded hover:bg-gray-100 '>Careers</li>
          <li  className='p-1 rounded hover:bg-gray-100 '>Support</li>
        </ul>
        <div className='flex items-center gap-4 ml-20 whitespace-nowrap'>
         <button>Login</button>
         <button className='bg-black text-white px-1 py-1.5 rounded-sm'>Get a Demo</button>
        </div>
      </nav>
      </div>

                         {/* Main */}

     <div className="relative flex justify-center whitespace-nowrap bg-linear-to-b from-blue-100 to-white min-h-screen shadow-xl w-[98%] rounded-3xl my-2 mx-5 overflow-hidden">
      <div className='relative z-20 m-15'>
        <h1 className='text-5xl font-medium'>
          Get your brand mentioned <br />
          <span className='flex w-full items-center justify-center gap-2'>
            by
            <img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/3840px-Claude_AI_symbol.svg.png" alt="" />
            Claude
          </span>
        </h1>
        <h2 className='flex justify-center mt-6 text-xl font-normal'>Reach millions of consumers who are using AI</h2>
        <h2 className='flex justify-center text-xl font-normal'>to discover new products and brands</h2>
        <div className='flex justify-center my-2'>
          <button className='text-lg font-normal m-1 rounded-lg shadow-xl bg-white px-2 py-1 hover:bg-black hover:text-white'>Talk to Sales</button>
          <button className='text-lg font-normal m-1 rounded-lg shadow-xl bg-[#45b077] text-white px-2 py-1 hover:bg-gray-100 hover:text-black'>Get a Demo</button>
        </div>
      </div>
        
        <div className="absolute inset-0 z-10">
          {floatingCards.map((card) => (
            <FloatingCard
              key={card.title}
              title={card.title}
              description={card.description}
              value={card.value}
              trend={card.trend}
              trendColor={card.trendColor}
              positionClasses={positionClasses[card.position]}
            />
          ))}
          <div className="absolute -mb-4 bottom-0 left-1/2 flex -translate-x-1/2 flex-row items-end justify-center gap-6">
            {Logos.map(function(elem,idx){
              return <Image key={idx} img={elem.img} positionImage={PositionImage[elem.position]} />
            })}
          </div>
        </div>
     </div >
     <Secondpage />
    </div >
     
  )
}

export default App
