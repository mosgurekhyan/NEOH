import { useNavigate } from 'react-router-dom'
import './Collection.css'
import Items3 from '../Items3/Items3'
import { useContext, useEffect } from 'react'
import { UseContext } from '../../App'

function Collection() {
  const navigate = useNavigate()
  const { ref1 } = useContext(UseContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={ref1} className='collection'>
      <div className="aboutHeader">
        <img className="overlay1" src="https://neoh-react.vercel.app/img/hero/bg.jpg" alt="" />
        <div className="aboutHeaderDiv">
          <h1>COLLECTION</h1>
          <h3><p onClick={() => navigate('/')} className='aboutP1'>Home</p> / <p>About</p></h3>
        </div>
      </div>
      <Items3/>
    </div>
  )
}

export default Collection