import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Page1View from './Page1View';
import bg from '/bg.png';
import { data } from './data';
import Page2View from './Page2View';

const Home = () => {
  const navigate = useNavigate();

  const goToNextPage = (item) => {
    navigate('/overview', { state: item });
  };

  return (
    <main className="min-h-screen h-full text-white w-auto bg-cover bg-center font-bold px-10 py-6 flex flex-col items-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-between w-full items-center mb-20">
        <img src="/logo1.png" alt="Logo 1" className="h-auto w-full max-w-[20vw]" />
        <img src="/logo2.png" alt="Logo 2" className="h-auto w-full max-w-[20vw]" />
      </div>
      <div className='flex flex-col items-center justify-center text-center h-full w-full'>
        <h1 className='font-norwester'>Pillars of Work:</h1>
        <div className='flex flex-col gap-20 my-10 w-full py-20 h-full'>
          {data.map((section) =>
            <div className='flex flex-col gap-x-2 gap-y-36 items-center w-full '>
              <h2 className='mb-5 font-norwester'>{section.title}</h2>
              <div className='grid grid-cols-4 justify-between gap-x-10 gap-y-20 px-16 w-full items-center'>
                {section.items.map((item) =>
                  <div className='flex flex-col gap-10 items-center group justify-center text-center cursor-pointer text-2xl my-auto h-full '>
                    <h3 className=' group-hover:scale-125 transition-all duration-300 ease-in-out'>
                      {item.title}
                    </h3>
                    <div
                      onClick={() => goToNextPage(item)}
                      className='w-full h-full max-w-[4vw] group-hover:scale-125 transition-all duration-300 ease-in-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" id="a" fill="#009EDB" stroke="#009EDB">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="4.608">
                          <defs>
                            <style>
                              {`.f{fill:none;stroke:#009EDB;stroke-linecap:round;stroke-linejoin:round;}`}
                            </style>
                          </defs>
                          <circle id="b" className="f" cx="24" cy="24" r="8.5" />
                          <circle id="c" className="f" cx="24" cy="24" r="11.8" />
                          <circle id="d" className="f" cx="24" cy="24" r="18.25" />
                          <circle id="e" className="f" cx="24" cy="24" r="21.5" />
                        </g>
                        <g id="SVGRepo_iconCarrier">
                          <defs>
                            <style>
                              {`.f{fill:none;stroke:#009EDB;stroke-linecap:round;stroke-linejoin:round;}`}
                            </style>
                          </defs>
                          <circle id="b" className="f" cx="24" cy="24" r="8.5" />
                          <circle id="c" className="f" cx="24" cy="24" r="11.8" />
                          <circle id="d" className="f" cx="24" cy="24" r="18.25" />
                          <circle id="e" className="f" cx="24" cy="24" r="21.5" />
                        </g>
                      </svg>
                    </div>
                  </div>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Page1View />} />
        <Route path="/strategy" element={<Page2View />} />
      </Routes>
    </Router>
  );
}

export default App
