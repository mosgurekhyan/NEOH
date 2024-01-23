import './Slider.css'
import { useContext, useState, useEffect } from 'react'
import { UseContext } from '../../App'
import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigate = useNavigate()
  const {items4} = useContext(UseContext)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = items4.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, items4])

  return (
    <div className='slider'>
      <div className="items2Div1">
        <h1>Neoh’s Roadmap</h1>
        <div className="line2">
          <span></span>
        </div>
      </div>
      <div className="sliderDiv">
        <section className="section">
          {items4.map((e, i) => {
          const { id, img1, img2, img3, date, title } = e
          let position = "nextSlide"
          if (i === index) {
            position = "activeSlide"
          }
          if (
            i === index - 1 ||
            (index === 0 && i === items4.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article key={id} className={position}>
              <div className='imagesDiv'>
                <div className="img1Div">
                  <img src={img1} alt='' className="img1" />
                </div>
                <div className="img23Div">
                <div className="img2Div">
                  <img src={img2} alt='' className="img23" />
                </div>
                <div className="img2Div">
                  <img src={img3} alt='' className="img23" />
                </div>
                </div>
              </div>
              <div className="articleData">
                <div className="polygon2">{date}</div>
                <h2>{title}</h2>
                <p>Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                <button onClick={() => navigate('/roadmap')}>READ MORE</button>
              </div>
            </article>
          )})}
        </section>
        <div className='dots'>
          <div className="line3"></div>
            {'<'}
            {
              items4.map((e, i) => (
                <div onClick={() => setIndex(i)} className='slide' key={e.id}>
                  <div className={`${index === i ? "dot2" : "dot1"}`}></div>
                  <p style={{color: index === i ? '#78f701' : '#666'}}>{e.date}</p>
                </div>
              ))
            }
            {'>'}
          </div>
        </div>
    </div>
  )
}

export default Slider