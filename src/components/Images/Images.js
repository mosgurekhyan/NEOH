import { useContext } from 'react'
import './Images.css'
import { UseContext } from '../../App'

function Images() {
  const { images } = useContext(UseContext)
  // mov777sesMOV777SES
  // movses.movses@mail.ru
  return (
    <div className='images'>
      {
        images.map(e => (
          <img style={{width: e.width, height: e.height}} key={e.id} className="image" src={e.img} alt="" />
        ))
      }
    </div>
  )
}

export default Images