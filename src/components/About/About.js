import './About.css'
import { useNavigate } from 'react-router-dom'
import video from '../../media/zevs.mp4'
import { useContext, useEffect, useState } from 'react'
import Items7 from '../Items7/Items7'
import { UseContext } from '../../App'
import Items from '../Items/Items'
import AboutData from '../AboutData/AboutData'

function About() {
  const navigate = useNavigate()
  const [popUp, setPopUp] = useState(false) 
  const { ref1 } = useContext(UseContext)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={ref1} className='about'>
      <div className="aboutHeader">
        <img className="overlay1" src="https://neoh-react.vercel.app/img/hero/bg.jpg" alt="" />
        <div className="aboutHeaderDiv">
          <h1>ABOUT</h1>
          <h3><p onClick={() => navigate('/')} className='aboutP1'>Home</p> / <p>About</p></h3>
        </div>
      </div>
      <Items/>
      <AboutData/>
      <div className="aboutDiv1">
        <img className="overlay1" src="https://neoh-react.vercel.app/img/hero/bg.jpg" alt="" />
        <div className="aboutDiv11">
          <div onClick={() => setPopUp(false)} style={{display: !popUp && 'none'}} className="popup">
            <video controls autoPlay muted src={popUp ? video : ''}></video>
          </div>
          <div className="aboutDiv111">
            <svg className='svg2'>
              <circle r='60' cx='62' cy='62' className='track2'></circle>
              <circle r='60' cx='62' cy='62' className='progress2'></circle>
            </svg>
            <div className="circle2"></div>
            <div onClick={() => setPopUp(true)} className="triangle"></div>
          </div>
        </div>
      </div>
      <Items7/>
    </div>
  )
}

export default About