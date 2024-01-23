import './Home.css'
import { useState, useEffect, useContext, useRef, useMemo } from 'react'
import { UseContext } from '../../App'
import Items from '../Items/Items'
import Items2 from '../Items2/Items2'
import Items3 from '../Items3/Items3'
import Slider from '../Slider/Slider'
import Items5 from '../Items5/Items5'
import News from '../News/News'

function Home() {
  const [counter, setCounter] = useState(0)
  const {ref1, handleClick} = useContext(UseContext)
  const ref2 = useRef(null)
  
  const sentence = 'The collection built by and runby codeefly. Together we are strong than ever.'
  const letters = sentence.split('')
  
  useEffect(() => {
    window.scrollTo(0, 0)
    const interval = setInterval(() => {
      setCounter(counter => counter === 77 ? counter : counter + 1)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  const visibleSentence = useMemo(() => {
    const visibleLetters = letters.slice(0, counter)
    return visibleLetters.join('')
  }, [counter, letters])

  return (
    <div ref={ref1} className='home'>
      <div className="homeDiv1">
        <img className="overlay1" src="https://neoh-react.vercel.app/img/hero/bg.jpg" alt="" />
        <div className='homeDiv11'>
          <div className="header">
            <h1 className='mainTitle'>NEOH</h1>
            <h3 className='mainText'>{visibleSentence}</h3>
            <div onClick={() => handleClick(ref2)} className="scrollDiv">
              <i className="arrowDown fa-solid fa-arrow-down"></i>
              <h4 className='scrollP'>SCROLL DOWN</h4>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref2} className='homeDiv2'>
        <Items/>
        <Items2/>
        <Items3/>
        <Slider/>
        <Items5/>
        <News/>
      </div>
    </div>
  )
}

export default Home


