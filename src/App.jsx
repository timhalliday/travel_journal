import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// CSS Libraries
import 'bootstrap/dist/css/bootstrap.css';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </div>
  )
}

export default App
library.add(fas, far, fab)
