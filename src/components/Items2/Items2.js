import { useContext } from 'react'
import './Items2.css'
import { UseContext } from '../../App'

function Items2() {
  const {items2} = useContext(UseContext)
  return (
    <div className='items2'>
      <div className="items2Div1">
        <h1>Why Choose Us?</h1>
        <div className="line2">
          <span></span>
        </div>
      </div>
      <div className="items2Div2">
        {
          items2.map(e => (
            <div style={{marginTop: e.id % 2 !== 0 && e.marTop}} className='items2Data' key={e.id}>
              <div className="polygon">{e.number}</div>
              <h2>{e.title}</h2>
              <p>{e.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Items2