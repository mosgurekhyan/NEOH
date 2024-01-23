import './ScrollTop.css'
import { useEffect, useState, useContext } from 'react'
import { UseContext } from '../../App'

function ScrollTop() {
  const [strokeDashoffset, setStrokeDashoffset] = useState(314)
  const [visibility, setVisibility] = useState(false)
  const {ref1, handleClick} = useContext(UseContext)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    }, [])

    const handleScroll = (e) => {
    let height = e.target.documentElement.scrollHeight
    let top = e.target.documentElement.scrollTop
    let innerHeight = window.innerHeight
    let percent = ((top + innerHeight) * 100) / height
    setStrokeDashoffset( 314 - ((314 * percent) / 100))

    if (e.target.documentElement.scrollTop > 185){
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }

  return (
    <div onClick={() => handleClick(ref1)} style={{visibility: visibility ? 'visible' : 'hidden'}} className='scrollTop'>
      <div className="scrollDivUp">
        <i className="arrowUp fa-solid fa-arrow-up"></i>
      </div>
      <svg className='svg'>
        <circle r='50' cx='52' cy='52' className='track'></circle>
        <circle style={{strokeDashoffset: strokeDashoffset}} r='50' cx='52' cy='52' className='progress'></circle>
      </svg>
    </div>
  )
}

export default ScrollTop