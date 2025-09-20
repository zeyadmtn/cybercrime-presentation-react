import bg from '/bg.png'

function App() {

  return (
    <main className="min-h-screen w-auto bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex flex-row justify-between px-10  mb-auto h-fit  w-full items-center py-5'>
        <img src="/logo1.png" alt="" className='h-auto w-full max-w-[35vw]' />
        <img src="/logo2.png" alt="" className='h-auto w-full max-w-[35vw]' />
      </div>
    </main>
  )
}

export default App
