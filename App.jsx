import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section className='head-section'>
     <nav className='navbar'>
    <span className='nav-link'>Home</span>
    <span className='nav-link'>About</span>
    <span className='nav-link'>Contact</span>
    <h1 className='nav-logo'>UNIVERSE</h1>
    <span className='nav-link'>Galaxies</span>
    <span className='nav-link'>Blog</span>
    <span className='nav-link'>العربية</span>
  </nav>
  {/* Sun Info Section */}
<div className='sun-info'>
  <h2 className='sun-title'>SUN</h2>
  
  <div className='sun-stats'>
    <div className='stat'>
      <h6>GALAXY</h6>
      <p>Milky Way</p>
    </div>
    <div className='stat'>
      <h6>DIAMETER</h6>
      <p>1,392,684 km</p>
    </div>
    <div className='stat'>
      <h6>LENGTH OF DAY</h6>
      <p>---</p>
    </div>
    <div className='stat'>
      <h6>AVERAGE TEMPERATURE</h6>
      <p>6000 Kelvin</p>
    </div>
  </div>
</div>
  <img src="./images/Solar System.png" className='planet-img' alt="" />
  <img src="./images/Show.png"className='two-planet' alt="" />
  <img src="./images/sun.png" className='sun-img' alt="" />
   </section>
  )
}

export default App
