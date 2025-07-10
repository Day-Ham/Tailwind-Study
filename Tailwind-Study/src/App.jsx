import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        <h1 className='text-cyan-500 underline font-extrabold'>Hello Dae Han</h1>
        <div className='pt-[4.75rem] lg:pt-p[5.25rem] overflow-hidden'>
         <Button className="mt-10"  >
          Click Me
          <ButtonGradient/>
         </Button>
         
         
        </div>
        
    </>
  )
}

export default App
