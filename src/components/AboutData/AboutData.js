import { useContext } from 'react'
import './AboutData.css'
import { UseContext } from '../../App'

function AboutData() {
  const {items6} = useContext(UseContext)
  return (
    <div className='aboutData'>
      {
        items6.map(e => (
          <div key={e.id} className="items6DataDiv">
            <div className="polygon4"></div>
            <i className={e.icon}></i>
            <h1>{e.title}</h1>
            <p>{e.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default AboutData