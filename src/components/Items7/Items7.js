import { useContext, useEffect, useState } from 'react'
import './Items7.css'
import { UseContext } from '../../App'

function Items7() {
  const {items7} = useContext(UseContext)
  const [counter, setCounter] = useState(0)
  const [height, setHeight] = useState(false)
  
  const sentence = 'The idea was born in London and rapidly became a borderless vision - A team of Neoh with a background in computer graphics, crypto, technology, and art.'
  const letters = sentence.split('')

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 2850){
      setHeight(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const interval = setInterval(() => {
      height && setCounter(counter => counter === 152 ? counter : counter + 1)
  }, 60)
  return () => {
    window.removeEventListener('scroll', handleScroll)
    clearInterval(interval)
    }
  }, [height])
  
  const visibleLetters = letters.slice(0, counter)
  const visibleSentence = visibleLetters.join('')

  return (
    <div className='items7'>
      <div className="items2Div1">
        <h1>Our Team Members</h1>
        <div className="line2">
          <span></span>
        </div>
      </div>
      <p className='visibleP'>{visibleSentence}</p>
      <div className="items7Div1">
        { 
          items7.map(e => (
            <div key={e.id} className="items7Data">
              <img src={e.img} alt="" />
              <h2>{e.name}</h2>
              <h3>{e.occupation}</h3>
              <div className="polygon5">
                <a href="https://twitter.com"><i className="navIcon fa-brands fa-twitter"></i></a>
                <a href="https://facebook.com"><i className="navIcon fa-brands fa-facebook"></i></a>
                <a href="https://instagram.com"><i className="navIcon fa-brands fa-instagram"></i></a>
                <a href="https://pinterest.com"><i className="navIcon fa-brands fa-pinterest-p"></i></a>
                <a href="https://behance.net"><i className="navIcon fa-brands fa-behance"></i></a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Items7